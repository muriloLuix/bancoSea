function verificarSenha() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");

  if (password !== confirmPassword) {
    passwordField.classList.add("confirmPasswordWrong");
    confirmPasswordField.classList.add("confirmPasswordWrong");
    return false;
  } else {
    passwordField.classList.remove("confirmPasswordWrong");
    confirmPasswordField.classList.remove("confirmPasswordWrong");
    return true;
  }
}

document
  .querySelector("form[action='../php/export.php']")
  .addEventListener("submit", function (event) {
    if (!verificarSenha()) {
      event.preventDefault();
    }
  });

document.getElementById("password").addEventListener("input", function () {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");

  if (passwordField.value === confirmPasswordField.value) {
    passwordField.classList.remove("confirmPasswordWrong");
    confirmPasswordField.classList.remove("confirmPasswordWrong");
  }
});

document
  .getElementById("confirmPassword")
  .addEventListener("input", function () {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");

    if (passwordField.value === confirmPasswordField.value) {
      passwordField.classList.remove("confirmPasswordWrong");
      confirmPasswordField.classList.remove("confirmPasswordWrong");
    }
  });
