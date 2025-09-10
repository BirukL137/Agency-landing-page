// =========================
// Mobile Navigation Toggle
// =========================
const navToggle = document.querySelector(".site-header__toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
