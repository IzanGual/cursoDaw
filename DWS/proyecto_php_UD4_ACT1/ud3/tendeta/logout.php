<?php
session_start(); // Iniciar la sesión

// Destruir todas las variables de sesión
session_unset();
session_destroy(); // Destruir la sesión

// Redirigir a la página de login
header("Location: login.php");
exit;
?>
