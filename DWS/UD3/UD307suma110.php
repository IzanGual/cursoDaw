<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Practiques</title>
</head>
<body>
    <h1>SUMA !</h1>

    <?php  
    
    $suma = 0;
    for ($i = 0; $i <= 10; $i++){
        $suma = $suma + $i;
    }

    echo "La suma dels numeros entre i y 10 es: $suma<br>";

    ?>
</body>
</html>
