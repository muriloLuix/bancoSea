// Adiciona um ouvinte de evento para o evento de envio (submit) do formulário com ID "registrationForm"
document.getElementById("registrationForm").addEventListener("submit", function () {
  // Quando o formulário é enviado, esta função é acionada

  // Define um temporizador para aguardar 100 milissegundos antes de executar a próxima ação
  setTimeout(function () {
      // Após o tempo especificado, redireciona o navegador para o arquivo "../php/cadastro.txt"
      window.location.href = "../php/cadastro.txt";
  }, 100);
});
