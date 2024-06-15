export function toggle(element) {
  element.classList.toggle("change");
}

// Abrir e fechar menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburguerMenu = document.querySelector(".hamburguer-menu");
  const container = document.querySelector(".container");
  const menuLinks = document.querySelectorAll(".menu-link");
  const menuExpanded = document.querySelector(".menu-expanded");

  function toggleMenu() {
    toggle(container);
  }

  function closeMenu() {
    container.classList.remove("change");
  }

  hamburguerMenu.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      !container.contains(event.target) &&
      !hamburguerMenu.contains(event.target)
    ) {
      closeMenu();
    }
  });
});
