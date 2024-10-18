<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Pares?</title>
</head>
<body>
    <h1>pares?</h1>

    <?php
    $num1 = $_GET["num1"];
    $num2 = $_GET["num2"];

    echo "Els numeros pars entre $num1 i $num2 son:<br>";
    for ($i = $num1; $i < $num2; $i++){
        if ($i % 2 == 0){
            echo "El número  $i es parell.<br>";
        }
    }
    ?>

</body>
</html>
