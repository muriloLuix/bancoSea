// Aguarda o carregamento completo do documento HTML antes de executar o código
$(document).ready(function() {
    // Adiciona um ouvinte de evento para o envio do formulário com ID "form-import"
    $("#form-import").submit(function(event) {
        // Impede o comportamento padrão de envio do formulário
        event.preventDefault();

        // Cria um objeto FormData contendo os dados do formulário
        var formData = new FormData(this);

        // Envia uma requisição AJAX para o arquivo PHP de importação
        $.ajax({
            url: "../php/import.php", // URL para o arquivo PHP de importação
            type: "POST", // Método de requisição HTTP
            data: formData, // Dados a serem enviados
            processData: false, // Não processa os dados automaticamente
            contentType: false, // Não define o tipo de conteúdo automaticamente
            success: function(response) {
                // Função executada em caso de sucesso na requisição

                // Converte a resposta JSON em um objeto JavaScript
                var dados = JSON.parse(response);

                // Cria um HTML com os dados importados
                var html = "<h2 class='import-title'>Dados Importados Com Sucesso!</h2>";
                html += "<p class='import-item'><strong>Primeiro Nome:</strong> " + dados.primeiro_nome + "</p>";
                html += "<p class='import-item'><strong>Último Nome:</strong> " + dados.ultimo_nome + "</p>";
                html += "<p class='import-item'><strong>Gênero:</strong> " + dados.genero + "</p>";
                html += "<p class='import-item'><strong>E-mail:</strong> " + dados.email + "</p>";
                html += "<p class='import-item'><strong>Telefone:</strong> " + dados.fone + "</p>";
                html += "<p class='import-item'><strong>Endereço:</strong> " + dados.address + ", " + dados.codigo_postal + "</p>";

                // Insere o HTML com os dados importados dentro do elemento com ID "resultado-importacao"
                $("#resultado-importacao").html(html);
            },
            error: function(xhr, status, error) {
                // Função executada em caso de erro na requisição

                // Exibe uma mensagem de erro no elemento com ID "resultado-importacao"
                $("#resultado-importacao").html("Erro: " + error);
            }
        });
    });
});
