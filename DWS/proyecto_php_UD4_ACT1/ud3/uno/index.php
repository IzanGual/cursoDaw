<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 1</title>
</head>
<body>
<h1>Practica</h1>
<h3>Introduce tu nombre de usuario</h3>


<form method="POST">
        <input type="text" name="username">
        <button type="submit">Enviar nombre de usuario</button>
    </form>

    <?php 

    // Si el inputo no esta vacio asignamos el valor a la cookie
    if (isset($_POST['username'])) {
        $name = $_POST['username']; 
        setcookie("userName", $name, time() + 3600);
        
        //La imprimimos para saver su valor actual 6y verificar que ha cambiado
        print_r($_COOKIE);
    }

    ?>

    <h3>Iniciar sesión</h3>
    <!-- Nos redirige al archivo de comprovacion-->
    <a href="comprobacion.php">Compruebame si existo</a>



    
</body>
</html>



