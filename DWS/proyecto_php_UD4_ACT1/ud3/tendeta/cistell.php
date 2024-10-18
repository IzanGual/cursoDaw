<?php

//Empezamos la session 
session_start();

//Comprueba si el usuario está autenticado
if (!isset($_SESSION['USER'])) {
    header("Location: login.php");
    exit;
}

// Maneja volver lista articulos
if (isset($_POST['volver'])) {
    header("Location: articles.php");
    exit;
}

// Maneja cerrar sesión
if (isset($_POST['logout'])) {
    header("Location: logout.php");
    exit;
}



// Comprueba si la cesta está vacía
$cart_empty = empty($_SESSION['cart']);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cistell</title>
</head>
<body>
    <h1>cistell.php</h1>

    <h2 id="userPrint">Usuario: <?php echo htmlspecialchars($_SESSION['USER']); ?></h2>

    <?php if ($cart_empty): ?>
        <p>La cesta esta completamente vacia.</p>
    <?php else: ?>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
            <?php foreach ($_SESSION['cart'] as $article): ?>
                <tr>
                    <td><?php echo htmlspecialchars($article['name']); ?></td>
                    <td><?php echo htmlspecialchars($article['price']); ?> €</td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>

    <form method="post">
        <button type="submit" name="logout">Cerrar sesión</button>
        <button type="submit" name="volver">Volver a la lista de articulos</button>
    </form>
</body>
</html>
