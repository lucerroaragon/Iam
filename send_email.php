<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "lcerroaragon9@gmail.com"; // Tu dirección de email
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $body = "Nombre: $name\n";
    $body .= "Email: $email\n";
    $body .= "Asunto: $subject\n";
    $body .= "Mensaje:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email enviado con éxito.";
    } else {
        echo "Error al enviar el email.";
    }
}
?>
