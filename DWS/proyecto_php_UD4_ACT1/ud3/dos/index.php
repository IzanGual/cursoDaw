<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 2</title>
</head>
<body>
<h1>Practica</h1>
<h3>Introduce tu nombre de usuario</h3>


<form method="POST">
        <p>Introduce el nombre</p>
        <input type="text" name="name">
        <p>Introduce los apellidos</p>
        <input type="text" name="lastname">

        <button type="submit">Enviar los datos</button>
    </form>

    <?php 

    // Iniciamos la session para poder utilizar su array asociativo, debe hacerse siempre.
    session_start();

   // Si no esta vacio asignamos lo valores a las variables 
    if (isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['lastname']) && !empty($_POST['lastname'])) {
        $name = $_POST['name'];
        $lastname = $_POST['lastname'];
        echo "Usuario Guardado";
    } else {
        echo "Por favor, completa todos los campos.";
    }
    
    // Asignamo slos valores a las variables de sesion
    $_SESSION['nom_user'] = $name;
    $_SESSION['cognoms_user'] = $lastname;
   
  

    ?>

    <h3>Iniciar sesión</h3>
    <a href="comprobacion.php">HIPERVINCLE</a>



    
</body>
</html>



