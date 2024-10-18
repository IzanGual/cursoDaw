<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Pares?</title>
</head>
<body>
    <h1>Pares?</h1>

    <?php
    for ($i = 0; $i < 50; $i++){
        if ($i % 2 == 0){
            echo "El número  $i es parell.<br>";
        }
    }
    ?>

</body>
</html>
