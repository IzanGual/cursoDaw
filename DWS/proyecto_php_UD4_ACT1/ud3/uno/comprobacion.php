<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 1</title>
</head>
<body>
<h1>Tendrás usuario ?</h1>

    <?php 
    
    // Si la cookie existe asignamos que $name sea el valor y comprueba si es igual a "izangual" si es asi te saluda y si no dice que no hay usuario
    if (isset($_COOKIE['userName'])) {
        $name = $_COOKIE['userName'];
        if($name == "izangual") {
            echo "Bienvenido USUARIO :" . $name;
        }
        else {
            echo "NO tienes usuario";
        }

    }
    ?>



    
</body>
</html>



