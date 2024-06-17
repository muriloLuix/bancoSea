<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $file_tmp_name = $_FILES['file']['tmp_name'];
        $file_name = $_FILES['file']['name'];

        $ext = pathinfo($file_name, PATHINFO_EXTENSION);
        if ($ext !== 'txt') {
            echo json_encode(["error" => "Por favor, selecione um arquivo de texto (.txt)"]);
            exit();
        }

        $file_content = file_get_contents($file_tmp_name);
        $data = explode('|', $file_content);

        $dados = [
            "primeiro_nome" => $data[0],
            "ultimo_nome" => $data[1],
            "genero" => $data[2],
            "email" => $data[3],
            "fone" => $data[4],
            "address" => $data[5],
            "codigo_postal" => $data[6]
        ];

        echo json_encode($dados);
    } else {
        echo json_encode(["error" => "Erro ao fazer upload do arquivo."]);
    }
}
?>