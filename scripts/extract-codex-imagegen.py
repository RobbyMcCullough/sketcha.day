#!/usr/bin/env python3
"""Extract built-in Codex image generation output from session JSONL.

Codex sometimes renders generated images inline without also writing a file to
`~/.codex/generated_images`. The session transcript still records the generated
image bytes in `image_generation_end.result`; this helper saves that real
built-in output to a project file for review and publishing.
"""

from __future__ import annotations

import argparse
import base64
import json
import sys
from dataclasses import dataclass
from pathlib import Path


CODEX_HOME = Path.home() / ".codex"
SESSIONS = CODEX_HOME / "sessions"


@dataclass
class ImageEvent:
    timestamp: str
    call_id: str
    prompt: str
    result: str
    session: Path


def newest_session() -> Path:
    sessions = sorted(SESSIONS.glob("**/rollout-*.jsonl"), key=lambda path: path.stat().st_mtime)
    if not sessions:
        raise SystemExit(f"No Codex session JSONL files found under {SESSIONS}")
    return sessions[-1]


def image_events(session: Path) -> list[ImageEvent]:
    events: list[ImageEvent] = []
    with session.open(encoding="utf-8") as file:
        for line in file:
            try:
                item = json.loads(line)
            except json.JSONDecodeError:
                continue
            payload = item.get("payload")
            if not isinstance(payload, dict):
                continue
            if payload.get("type") != "image_generation_end" or not payload.get("result"):
                continue
            events.append(
                ImageEvent(
                    timestamp=str(item.get("timestamp", "")),
                    call_id=str(payload.get("call_id", "")),
                    prompt=str(payload.get("revised_prompt", "")),
                    result=str(payload["result"]),
                    session=session,
                )
            )
    return events


def parse_index(value: str, count: int) -> int:
    try:
        index = int(value)
    except ValueError as error:
        raise SystemExit("--index must be an integer") from error
    if index == 0:
        raise SystemExit("--index is 1-based; use 1, 2, or -1 for latest")
    if index < 0:
        index = count + index + 1
    if index < 1 or index > count:
        raise SystemExit(f"--index {value} is out of range for {count} image events")
    return index - 1


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Save a built-in Codex image generation result from session JSONL."
    )
    parser.add_argument(
        "--session",
        type=Path,
        default=None,
        help="Session JSONL to read. Defaults to newest ~/.codex/sessions rollout.",
    )
    parser.add_argument(
        "--index",
        default="-1",
        help="1-based image event index to save; negative indexes count from the end.",
    )
    parser.add_argument(
        "--prompt-contains",
        help="Only consider image events whose revised prompt contains this text.",
    )
    parser.add_argument("--list", action="store_true", help="List matching image events.")
    parser.add_argument("--out", type=Path, help="Output image path.")
    args = parser.parse_args()

    session = args.session or newest_session()
    events = image_events(session)
    if args.prompt_contains:
        needle = args.prompt_contains.lower()
        events = [event for event in events if needle in event.prompt.lower()]
    if not events:
        raise SystemExit(f"No matching image_generation_end events found in {session}")

    if args.list:
        for number, event in enumerate(events, start=1):
            prompt_line = event.prompt.splitlines()[0] if event.prompt else ""
            print(f"{number}: {event.timestamp} {event.call_id} {len(event.result)} chars {prompt_line}")
        return 0

    if not args.out:
        raise SystemExit("--out is required unless --list is used")

    event = events[parse_index(args.index, len(events))]
    image_bytes = base64.b64decode(event.result)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_bytes(image_bytes)
    print(f"Wrote {args.out} from {event.call_id} ({len(image_bytes)} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
