function switchThemeRegister() {
  const body = document.body;
  const toggleSwitch = document.querySelector(".toggle-switch");
  const wrapper = document.querySelector(".wrapper");
  const labels = document.querySelectorAll(".labelInput");
  const check = document.querySelector(".checkmark");
  const title = document.querySelector(".title");
  const btn = document.querySelector(".btn");

  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("bodyDark");
    body.classList.toggle("bodyWhite");
    wrapper.classList.toggle("wrapperDark");
    title.classList.toggle("titleWhite");
    check.classList.toggle("checkmarkDark");
    btn.classList.toggle("btnDark");

    labels.forEach((label) => {
      label.classList.toggle(
        "labelInputWhite",
        body.classList.contains("bodyDark")
      );
    });
  });
}

document.addEventListener("DOMContentLoaded", switchThemeRegister);
