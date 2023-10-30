<?php
if (isset($_POST['enviarMensaje'])) {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $adminEmail = 'osoriokalef@gmaoil.com';  // Reemplaza con el correo del administrador

    $subject = "Nuevo mensaje de contacto - $asunto";
    $message = "Nombre: $nombre\nNúmero telefónico: $telefono\nMensaje: $mensaje";

    mail($adminEmail, $subject, $message);

    // Redirigir o mostrar un mensaje de confirmación al usuario
    header('Location: gracias.html'); // Reemplaza con la página de agradecimiento
}
?>
