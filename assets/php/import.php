<?php
// Verifica se a requisição HTTP é do tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se um arquivo foi enviado e se não houve erros durante o upload
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        // Obtém o nome temporário do arquivo enviado
        $file_tmp_name = $_FILES['file']['tmp_name'];
        // Obtém o nome original do arquivo enviado
        $file_name = $_FILES['file']['name'];

        // Obtém a extensão do arquivo
        $ext = pathinfo($file_name, PATHINFO_EXTENSION);
        // Verifica se a extensão do arquivo não é .txt
        if ($ext !== 'txt') {
            // Retorna um erro JSON se o arquivo enviado não for um arquivo de texto
            echo json_encode(["error" => "Por favor, selecione um arquivo de texto (.txt)"]);
            exit(); // Encerra a execução do script PHP
        }

        // Obtém o conteúdo do arquivo
        $file_content = file_get_contents($file_tmp_name);
        // Divide o conteúdo do arquivo em partes usando o caractere |
        $data = list($first_name, $last_name, $genero, $email, $fone, $address, $codigo_postal) = explode('|', $file_content);

        // Cria um array associativo com os dados extraídos do arquivo
        $dados = [
            "primeiro_nome" => $data[0],
            "ultimo_nome" => $data[1],
            "genero" => $data[2],
            "email" => $data[3],
            "fone" => $data[4],
            "address" => $data[5],
            "codigo_postal" => $data[6]
        ];

        // Retorna os dados do arquivo em formato JSON
        echo json_encode($dados);
    } else {
        // Se não houver arquivo enviado ou houver erros durante o upload, retorna uma mensagem de erro JSON
        echo json_encode(["error" => "Erro ao fazer upload do arquivo."]);
    }
}
?>