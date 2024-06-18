function phone(campo) {
  // Remove todos os caracteres não numéricos do valor do campo
  let cellphone = campo.value.replace(/\D/g, "");

  // Formata o número de telefone no formato (XX) XXXX-XXXX
  cellphone = cellphone.replace(/^(\d{2})(\d)/g, "($1) $2");
  cellphone = cellphone.replace(/(\d)(\d{4})$/, "$1-$2");

  // Atualiza o valor do campo com o número de telefone formatado
  campo.value = cellphone;
}

// Obtém o elemento de entrada para o número de telefone
let cellphoneInput = document.getElementById("phoneNumber");

// Adiciona um ouvinte de evento para formatar o número de telefone enquanto o usuário digita
cellphoneInput.addEventListener("input", function () {
  phone(cellphoneInput);
});

// Função para permitir apenas letras e espaços no campo
function apenasLetrasComEspaco(campo) {
  // Remove caracteres que não são letras ou espaços do valor do campo
  campo.value = campo.value.replace(/[^a-zA-Z\s]/g, "");
}

// Obtém os elementos de entrada para o primeiro e último nome
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");

// Adiciona ouvintes de evento para formatar os campos de nome enquanto o usuário digita
firstNameInput.addEventListener("input", function () {
  apenasLetrasComEspaco(firstNameInput);
});

lastNameInput.addEventListener("input", function () {
  apenasLetrasComEspaco(lastNameInput);
});

// Função para permitir apenas letras e espaços no campo de rua
function streetConfiguration(campo) {
  // Remove caracteres que não são letras ou espaços do valor do campo
  campo.value = campo.value.replace(/[^a-zA-Z\s]/g, "");
}

// Obtém o elemento de entrada para o nome da rua
let streetInput = document.getElementById("street");

// Adiciona um ouvinte de evento para formatar o campo de rua enquanto o usuário digita
streetInput.addEventListener("input", function () {
  streetConfiguration(streetInput);
});

// Função para formatar o código postal
function postalCode(campo) {
  // Remove todos os caracteres não numéricos do valor do campo
  let postalCode = campo.value.replace(/\D/g, "");

  // Formata o código postal no formato XXXXX-XXX, se aplicável
  if (postalCode.length > 5) {
    postalCode = postalCode.replace(/^(\d{5})(\d)/, "$1-$2");
  }

  // Atualiza o valor do campo com o código postal formatado
  campo.value = postalCode;
}

// Obtém o elemento de entrada para o código postal
let postalCodeInput = document.getElementById("postalCode");

// Adiciona um ouvinte de evento para formatar o código postal enquanto o usuário digita
postalCodeInput.addEventListener("input", function () {
  postalCode(postalCodeInput);
});
