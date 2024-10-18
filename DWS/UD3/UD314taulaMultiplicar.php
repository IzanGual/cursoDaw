<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Taula de Multiplicar</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
            border: 1px solid black;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Taula de Multiplicar</h1>

    <?php
    $num = $_GET["num"];

    echo "<table>";
    echo "<thead>";
    echo "<tr>";
    echo "<th>Multiplicador</th>";
    echo "<th>Resultat</th>";
    echo "</tr>";
    echo "</thead>";
    echo "<tbody>";

    for ($i = 1; $i <= 10; $i++) {
        $resultat = $num * $i;
        echo "<tr>";
        echo "<td>$num x $i</td>";
        echo "<td>$resultat</td>";
        echo "</tr>";
    }

    echo "</tbody>";
    echo "</table>";
    ?>

</body>
</html>
