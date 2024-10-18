<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Tauler d'Escacs</title>
    <style>
        table {
            border-collapse: collapse;
            border: 2px solid black;
        }
        td {
            width: 40px;
            height: 40px;
        }
        .blanco {
            background-color: #fff;
        }
        .negro {
            background-color: #000;
        }
    </style>
</head>
<body>
    <h1>Tauler d'Escacs</h1>
    <table>
        <?php
        $mida = 8; 

        for ($fila = 0; $fila < $mida; $fila++) {
            echo "<tr>";
            for ($col = 0; $col < $mida; $col++) {
                
                if (($fila + $col) % 2 == 0) {
                    echo "<td class='blanco'></td>";
                } else {
                    echo "<td class='negro'></td>";
                }
            }
            echo "</tr>";
        }
        ?>
    </table>
</body>
</html>
