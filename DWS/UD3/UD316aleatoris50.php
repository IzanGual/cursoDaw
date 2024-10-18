<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Practiques</title>
</head>
<body>
    <h1>ARRAY !</h1>

    <?php
    $array = array();
    for ($i = 0; $i < 50; $i++) {
        $array[] = rand(0, 99);
    }

    shuffle($array);

    echo "\nArray desordenat:\n";
    print_r($array);

    ?>

</body>
</html>
