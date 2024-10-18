<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resposta de la Bola 8</title>
</head>
<body>

    <h1>Resposta de la Bola 8</h1>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $pregunta = htmlspecialchars($_POST["pregunta"]);

       
        $respostes = [
            "Sí, definitivament.",
            "Les perspectives són bones.",
            "És incert, prova-ho de nou.",
            "No comptis amb això.",
            "Les respostes no són clares.",
            "Sí, absolutament.",
            "Ho dubto molt.",
            "Sense dubte.",
            "Més probable que no.",
            "Pregunta de nou més tard.",
            "Clarooo!",
        ];

       
        $resposta_aleatoria = $respostes[array_rand($respostes)];

       
        echo "<p><strong>Pregunta:</strong> $pregunta</p>";
        echo "<p><strong>Resposta:</strong> $resposta_aleatoria</p>";
    } else {
        echo "<p>Error: no s'ha rebut cap pregunta.</p>";
    }
    ?>

</body>
</html>
