<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultats Matemàtics</title>
</head>
<body>

    <h1>Resultats Matemàtics</h1>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $num_elements = intval($_POST["elements"]);

      
        if ($num_elements > 0) {
            
            $numeros = array();
            for ($i = 0; $i < $num_elements; $i++) {
                $numeros[] = rand(0, 100);
            }

            
            $mayor = max($numeros);
            $menor = min($numeros);
            $mitjana = array_sum($numeros) / count($numeros);  
            $media = $numeros[floor(count($numeros) / 2)]; 

      
            echo "<p><strong>Números generats:</strong> " . implode(", ", $numeros) . "</p>";
            echo "<p><strong>Major:</strong> $mayor</p>";
            echo "<p><strong>Menor:</strong> $menor</p>";
            echo "<p><strong>Mitjana :</strong> " . round($mitjana, 2) . "</p>";
            echo "<p><strong>Media:</strong> $media</p>";
        } else {
            echo "<p>Error: Has de introduir un número d'elements valid.</p>";
        }
    } else {
        echo "<p>Error: No se h rebut cap dada.</p>";
    }
    ?>

</body>
</html>
