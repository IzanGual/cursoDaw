<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>por aquei no</title>
</head>
<body>
    
    
</body>
</html>


<?php
// Iniciamos la sesión
session_start();

// Definimos las variables inicales usuario y contra
$USUARIO = "izan";
$contrasena = "81dc9bdb52d04dc20036dbd8313ed055";

// Comprobar si el formulario ha sido enviado
if (isset($_POST['user']) && !empty($_POST['user']) && isset($_POST['contra']) && !empty($_POST['contra'])) {


    // Si ah asido enviado asignamos los valores a 
    $user = $_POST['user'];
    $contra = md5($_POST['contra']); // Encriptar la contraseña con md5

    if ($contra === $contrasena && $USUARIO === $user) {
        $_SESSION['USER'] = $user;

    // Redirigir a la página de lista de artículos
        header("Location: articles.php");
        exit;
    }
    else {
        echo "<h1 id='red'>Usuario incorrecto</h1><form action='login.php' method='POST'><button type='submit'>Volver a login.php</button></form>";

    }
    
} else {
    echo "Por favor, completa todos los campos.";
}
?>
