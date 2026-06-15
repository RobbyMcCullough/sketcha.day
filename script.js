const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const stepButtons = document.querySelectorAll(".step-check");
const celebrateButton = document.querySelector("#celebrate-button");
const confettiLayer = document.querySelector(".confetti");
const signupForm = document.querySelector(".signup-form");
const formMessage = document.querySelector(".form-message");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }
});

stepButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    const isComplete = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isComplete));
  });
});

function celebrate() {
  const colors = ["#dc623f", "#f2b83d", "#43899a", "#6d8763", "#d88c91"];
  confettiLayer.replaceChildren();

  for (let index = 0; index < 55; index += 1) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confettiLayer.append(piece);
  }

  setTimeout(() => confettiLayer.replaceChildren(), 2300);
}

celebrateButton?.addEventListener("click", () => {
  stepButtons.forEach((button) => button.setAttribute("aria-pressed", "true"));
  celebrate();
});

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get("email");
  formMessage.textContent = `Nice. The next prompt will find ${email}.`;
  signupForm.reset();
});

