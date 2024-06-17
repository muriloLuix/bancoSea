<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $file_tmp_name = $_FILES['file']['tmp_name'];
        $file_name = $_FILES['file']['name'];

        // Verifica se o arquivo é de texto
        $ext = pathinfo($file_name, PATHINFO_EXTENSION);
        if ($ext !== 'txt') {
            echo "Erro: Por favor, selecione um arquivo de texto (.txt)";
            exit();
        }

        // Lê o conteúdo do arquivo
        $file_content = file_get_contents($file_tmp_name);

        // Divide o conteúdo em um array pelos delimitadores "|"
        $data = explode('|', $file_content);

        // Exibindo as informações na tela
        echo "<h2>Dados Importados</h2>";
        echo "<p><strong>Primeiro Nome:</strong> " . $data[0] . "</p>";
        echo "<p><strong>Último Nome:</strong> " . $data[1] . "</p>";
        echo "<p><strong>Gênero:</strong> " . $data[2] . "</p>";
        echo "<p><strong>E-mail:</strong> " . $data[3] . "</p>";
        echo "<p><strong>Telefone:</strong> " . $data[4] . "</p>";
        echo "<p><strong>Endereço:</strong> " . $data[5] . ", " . $data[6] . "</p>";
        echo "<p><strong>Código Postal:</strong> " . $data[7] . "</p>";
    } else {
        echo "Erro ao fazer upload do arquivo.";
    }
}
?>