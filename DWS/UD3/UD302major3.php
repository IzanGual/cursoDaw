<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Positiu, Negatiu o Zero</title>
</head>
<body>
    <h1>Comprova si un número és positiu, negatiu o zero</h1>

    <?php
    $a = $_GET["a"];
    $b = $_GET["b"];
    $c = $_GET["c"];
    $num = 0;
    
    if($a > $b && $a > $c) {
        $num = $a;
    } elseif($b > $c) {
        $num = $b;
    } else {
        $num = $c;
    }

    echo "El número mayor es: $num";

    ?>

</body>
</html>
