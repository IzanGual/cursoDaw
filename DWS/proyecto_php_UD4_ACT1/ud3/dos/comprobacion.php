<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 2</title>
</head>
<body>
<h1>Te saludare?</h1>

    <?php 

    // Iniciamos la sesion
    session_start();
   
    //Si la variable de sesion nom_user y cognoms_user existe hacemos :
    if (isset($_SESSION['nom_user']) && isset($_SESSION['cognoms_user'])) {
        echo ("Holaa " . $_SESSION['nom_user'] ." ". $_SESSION['cognoms_user'] . " encantado de conocerte");
    }
    else {
        echo ("No se quien eres, no puedes visualizar esta página");
    }

    ?>
    
</body>
</html>



