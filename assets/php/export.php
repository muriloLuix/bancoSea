<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    // $password = $_POST['password']; // Removido para não exportar a senha
    // $confirmPassword = $_POST['confirmPassword']; // Removido para não exportar a senha
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $address = $_POST['address'];
    $postalCode = $_POST['postalCode'];
    $terms = isset($_POST['terms']) ? 'Sim' : 'Não';

    $data = "Primeiro Nome: $firstName\nÚltimo Nome: $lastName\nGênero: $gender\nE-mail: $email\nNúmero: $phoneNumber\nEndereço: $address\nCódigo Postal: $postalCode\nAceita os termos: $terms";

    $file = fopen("cadastro.txt", "w") or die("Unable to open file!");
    fwrite($file, $data);
    fclose($file);

    echo "Cadastro realizado com sucesso!";
}
?>
