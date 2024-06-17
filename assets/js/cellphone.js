// Formatar Telefone

function phone(campo) {
  let cellphone = campo.value.replace(/\D/g, "");

  cellphone = cellphone.replace(/^(\d{2})(\d)/g, "($1) $2");
  cellphone = cellphone.replace(/(\d)(\d{4})$/, "$1-$2");

  campo.value = cellphone;
}

let cellphoneInput = document.getElementById("phoneNumber");

cellphoneInput.addEventListener("input", function () {
  phone(cellphoneInput);
});

// Formatar Nome

function apenasLetrasComEspaco(campo) {
  campo.value = campo.value.replace(/[^a-zA-Z\s]/g, "");
}

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");

firstNameInput.addEventListener("input", function () {
  apenasLetrasComEspaco(firstNameInput);
});

lastNameInput.addEventListener("input", function () {
  apenasLetrasComEspaco(lastNameInput);
});

// Formatar Rua

function streetConfiguration(campo) {
  campo.value = campo.value.replace(/[^a-zA-Z\s]/g, "");
}

let streetInput = document.getElementById("street");

streetInput.addEventListener("input", function () {
  streetConfiguration(streetInput);
});

// Formatar Código Postal

function postalCode(campo) {
    let postalCode = campo.value.replace(/\D/g, "");

    if (postalCode.length > 5) {
        postalCode = postalCode.replace(/^(\d{5})(\d)/, "$1-$2");
    }

    campo.value = postalCode;
}

let postalCodeInput = document.getElementById("postalCode");

postalCodeInput.addEventListener("input", function () {
    postalCode(postalCodeInput);
});
