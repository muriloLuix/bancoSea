function switchTheme() {
  const body = document.body;
  const greenBg = document.querySelector(".greenBg");
  const line = document.querySelectorAll(".line");
  const menu = document.querySelector(".menu-expanded");
  const menuLinks = document.querySelectorAll(".menu-link");
  const conteudo = document.querySelector(".conteudo");
  const toggleSwitch = document.querySelector(".toggle-switch");
  const services = document.querySelector(".services");
  const title = document.querySelector(".title");
  const panel = document.querySelectorAll(".panel");
  const main = document.querySelector(".main");
  const titlePanel = document.querySelectorAll(".titlePanel");
  const paragraf = document.querySelectorAll(".paragrafPanel");
  const footer = document.querySelector(".footer");

  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("bodyDark");
    body.classList.toggle("bodyWhite");
    greenBg.classList.toggle("greenBgDark");
    menu.classList.toggle("menu-expandedDark");
    conteudo.classList.toggle("conteudoDark");
    main.classList.toggle("mainDark");
    services.classList.toggle("servicesDark");
    title.classList.toggle("titleDark");
    footer.classList.toggle("footerDark");

    menuLinks.forEach((link) => {
      link.classList.toggle("menu-linkWhite");
    });

    line.forEach((link) => {
      link.classList.toggle("lineWhite");
    });

    panel.forEach((link) => {
      link.classList.toggle("panelDark");
    });

    paragraf.forEach((link) => {
      link.classList.toggle("paragrafPanelWhite");
    });

    titlePanel.forEach((link) => {
      link.classList.toggle("titlePanelWhite");
    });
  });
}

document.addEventListener("DOMContentLoaded", switchTheme);
