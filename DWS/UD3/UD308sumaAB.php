<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Practiques</title>
</head>
<body>
    <h1>SUMA !</h1>

    <?php
    $num1 = $_GET["num1"];
    $num2 = $_GET["num2"];

    $suma = 0;
    for ($i = $num1; $i <= $num2; $i++){
        $suma = $suma + $i;
    }

    echo "La suma dels numeros entre $num1 y $num2 es: $suma<br>";
    ?>

</body>
</html>
