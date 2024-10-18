<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generar Gèneres</title>
</head>
<body>

    <h1>Generar Gèneres Aleatoris</h1>

    <?php
  
    $generes = array();
    
   
    for ($i = 0; $i < 100; $i++) {
        $generes[] = rand(0, 1) ? 'M' : 'F'; 
    }

    
    $comptes = ['M' => 0, 'F' => 0];

    
    foreach ($generes as $genere) {
        if ($genere === 'M') {
            $comptes['M']++; 
        } elseif ($genere === 'F') {
            $comptes['F']++; 
        }
    }


    echo "<p>Nombre total de gèneres:</p>";
    echo "<ul>";
    echo "<li>Masculins (M): " . $comptes['M'] . "</li>";
    echo "<li>Femenins (F): " . $comptes['F'] . "</li>"; // Corrigiendo la etiqueta
    echo "</ul>";
    ?>

</body>
</html>

