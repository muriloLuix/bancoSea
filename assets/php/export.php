<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    // $password = $_POST['password']; // Removido para não exportar a senha
    // $confirmPassword = $_POST['confirmPassword']; // Removido para não exportar a senha
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $street = $_POST['street'];
    $postalCode = $_POST['postalCode'];
    // $terms = isset($_POST['terms']) ? 'Sim' : 'Não';
    $number = $_POST['numberStreet'];

    // Exportando apenas os valores, separados por "|"
    $data = "$firstName|$lastName|$gender|$email|$phoneNumber|$street|$number|$postalCode";

    $file = fopen("cadastro.txt", "w") or die("Unable to open file!");
    fwrite($file, $data);
    fclose($file);

    // Forçando o download do arquivo
    header('Content-Disposition: attachment; filename="cadastro.txt"'); // Define o cabeçalho para forçar o download com o nome do arquivo
    header("Content-Type: text/plain"); // Define o tipo de conteúdo como texto plano
    header("Content-Length: " . filesize("cadastro.txt")); // Define o tamanho do conteúdo do arquivo
    readfile("cadastro.txt"); // Lê e envia o conteúdo do arquivo para download
}
?>