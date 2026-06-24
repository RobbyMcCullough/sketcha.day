const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const stepButtons = document.querySelectorAll(".step-check");
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

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "The daily email list is coming soon.";
});
