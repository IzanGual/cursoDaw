<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Càlcul de la Potència</title>
</head>
<body>
    <h1>Calcula la Potència d'una base elevada a un exponent DO WHILE</h1>

    <?php

    $base = $_GET["base"];
    $exponent = $_GET["exponent"];
    $resultat = 1;
    $i = 0;

    if ($exponent == 0) {
        $resultat = 1;
    } else {
        
        do {
            $resultat *= $base;
            $i++;
        } while ($i < $exponent);

    }

    echo "$base elevat a $exponent és igual a $resultat.";
    ?>

</body>
</html>
