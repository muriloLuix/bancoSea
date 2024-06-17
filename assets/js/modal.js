$(document).ready(function() {
    $("#form-import").submit(function(event) {
        event.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            url: "../php/import.php", 
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                var dados = JSON.parse(response);
                var html = "<h2>Dados Importados</h2>";
                html += "<p><strong>Primeiro Nome:</strong> " + dados.primeiro_nome + "</p>";
                html += "<p><strong>Último Nome:</strong> " + dados.ultimo_nome + "</p>";
                html += "<p><strong>Gênero:</strong> " + dados.genero + "</p>";
                html += "<p><strong>E-mail:</strong> " + dados.email + "</p>";
                html += "<p><strong>Telefone:</strong> " + dados.fone + "</p>";
                html += "<p><strong>Endereço:</strong> " + dados.address + ", " + dados.codigo_postal + "</p>";
                $("#resultado-importacao").html(html);
            },
            error: function(xhr, status, error) {
                $("#resultado-importacao").html("Erro: " + error);
            }
        });
    });
});