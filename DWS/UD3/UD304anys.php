<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Càlcul d'edat</title>
</head>
<body>
    <h1>Calcula l'edat en el futur i el passat</h1>

    <?php
    $edat = $_GET["edat"];
    $anyActual = date("Y");

    $edatDespres10 = $edat + 10;
    $anyDespres10 = $anyActual + 10;


    $edatFa10 = $edat - 10;
    $anyFa10 = $anyActual - 10;


    $anyJubilacio = $anyActual + (67 - $edat);


    echo "Ara tens $edat anys.<br>";
    echo "D'aquí 10 anys tindràs $edatDespres10 anys, i serà l'any $anyDespres10.<br>";
    echo "Fa 10 anys tenies $edatFa10 anys, i era l'any $anyFa10.<br>";

    if ($edat >= 67) {
        echo "Ja estàs jubilat/da.";
    } else {
        echo "Et jubilaràs l'any $anyJubilacio quan tinguis 67 anys.";
    }
    ?>

</body>
</html>
