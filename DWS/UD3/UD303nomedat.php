<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Classificació segons l'edat</title>
</head>
<body>
    <h1>Classifica segons l'edat</h1>

    <?php
    $edat = $_GET["edat"];

    if ($edat < 3) {
        echo "Nadó";
    } elseif ($edat >= 3 && $edat <= 12) {
        echo "Xiquet/a";
    } elseif ($edat >= 13 && $edat <= 17) {
        echo "Adolescent";
    } elseif ($edat >= 18 && $edat <= 66) {
        echo "Adult/a";
    } elseif ($edat >= 67) {
        echo "Jubilat/da";
    }
    ?>

</body>
</html>
