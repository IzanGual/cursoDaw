<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Altura de Persones</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h1>Altura de 5 Persones</h1>
    <?php
   
    $persones = [
        "Izan" => 1.75,
        "Edu" => 1.68,
        "Marc" => 1.82,
        "Anna" => 1.60,
        "Lucas" => 1.90,
    ];

    
    $suma_altures = 0;
    $total_persones = count($persones);

    
    echo "<table>";
    echo "<tr><th>Nom</th><th>Altura (m)</th></tr>";

    foreach ($persones as $nom => $altura) {
        echo "<tr><td>$nom</td><td>" . number_format($altura, 2) . "</td></tr>";
        $suma_altures += $altura; 
    }

   
    $altura_mitjana = $suma_altures / $total_persones;

    echo "<tr><td><strong>Altura Mitjana</strong></td><td><strong>" . number_format($altura_mitjana, 2) . "</strong></td></tr>";
    echo "</table>";
    ?>
</body>
</html>
