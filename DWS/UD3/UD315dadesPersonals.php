<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taula de Dades Personals</title>
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
        td {
            background-color: #e6f7ff;
        }
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>

    <h1>Dades Personals</h1>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recollim les dates del formulari
        $nom = htmlspecialchars($_POST["nom"]);
        $cognoms = htmlspecialchars($_POST["cognoms"]);
        $data_naixement = htmlspecialchars($_POST["data_naixement"]);
        $correu = htmlspecialchars($_POST["correu"]);
        $telefon = htmlspecialchars($_POST["telefon"]);
    ?>

    <table>
        <tr>
            <th>Nom</th>
            <td><?php echo $nom; ?></td>
        </tr>
        <tr>
            <th>Cognoms</th>
            <td><?php echo $cognoms; ?></td>
        </tr>
        <tr>
            <th>Data de Naixement</th>
            <td><?php echo $data_naixement; ?></td>
        </tr>
        <tr>
            <th>Correu electrònic</th>
            <td><?php echo $correu; ?></td>
        </tr>
        <tr>
            <th>Telèfon</th>
            <td><?php echo $telefon; ?></td>
        </tr>
    </table>

    <?php
    } else {
        echo "<p>Error: les dades no s'han enviat correctament.</p>";
    }
    ?>

</body>
</html>
