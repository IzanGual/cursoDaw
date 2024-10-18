<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Dibuixar una Piràmide Simètrica</title>
</head>
<body>
    <h1>Dibuixa una Piràmide Simètrica amb Asteriscs</h1>
    <?php

    $n = $_GET["base"]; 

    if ($n >= 3) {
    
        for ($i = 1; $i <= ceil($n / 2); $i++) {
            for ($j = 1; $j <= $i; $j++) {
                echo "*";
            }
            echo "<br/>";
        }


        for ($i = floor($n / 2); $i >= 1; $i--) {
            for ($j = 1; $j <= $i; $j++) {
                echo "*";
            }
            echo "<br/>";
        }
    } else {
        echo "El número ha de ser almenys 3 per a dibuixar la piràmide.";
    }

    ?>
</body>
</html>
