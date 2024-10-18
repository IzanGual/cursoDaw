<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Positiu, Negatiu o Zero</title>
</head>
<body>
    <h1>Comprova si un número és positiu, negatiu o zero</h1>

    <?php
    $numero = $_GET["numero"];
        if ($numero > 0) {
            echo "<p>El número $numero és positiu.</p>";
        } elseif ($numero < 0) {
            echo "<p>El número $numero és negatiu.</p>";
        } else {
            echo "<p>El número és zero.</p>";
        }
    ?>
    
</body>
</html>