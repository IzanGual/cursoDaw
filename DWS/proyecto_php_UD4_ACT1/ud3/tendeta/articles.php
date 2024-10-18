<?php
session_start();


// Lista de articulos
$articles = [
    ["id" => 1, "name" => "Laptop", "price" => 1000],
    ["id" => 2, "name" => "Monitor", "price" => 300],
    ["id" => 3, "name" => "Teclado", "price" => 50],
    ["id" => 4, "name" => "Ratón", "price" => 20],
    ["id" => 5, "name" => "Auriculares", "price" => 100],
    ["id" => 6, "name" => "Impresora", "price" => 150],
    ["id" => 7, "name" => "Webcam", "price" => 70],
    ["id" => 8, "name" => "Altavoces", "price" => 80],
];

// Si se  da al boton para añadir a la cesta 
if (isset($_POST['add_to_cart'])) {

    // Si la lista no esta bacia 
    if (!empty($_POST['article_ids'])) {

        echo '<p style="color: green;">Productos añadidos correctamente a la cesta.</p>';
        // Por cada articulo ID que este seleccionado lo añadimos a la cesta
        foreach ($_POST['article_ids'] as $article_id) {
            foreach ($articles as $article) {
                if ($article['id'] == $article_id) {
                    $_SESSION['cart'][] = $article;
                    break;
                }
            }
        }
    }
}

// Iteramos sobre la cesta y la = a nada
if (isset($_POST['empty_cart'])) {
    echo '<p style="color: green;">Cesta vaciada correctamente.</p>';
    $_SESSION['cart'] = [];
}

// Redirige a la página de compra
if (isset($_POST['buy'])) {
    header("Location: cistell.php");
    exit;
}

// Maneja la acción de cerrar sesión
if (isset($_POST['logout'])) {
    header("Location: logout.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>articles</title>
</head>
<body>
    <h1>articles.php</h1>
    <h2 id="userPrint">Usuario: <?php echo htmlspecialchars($_SESSION['USER']); ?></h2>
    <form method="post">
        <table>
            <tr>
                <th>Seleccionar</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
            <?php foreach ($articles as $article): ?> <!-- Inicia un bucle que itera sobre el array $articles. -->

                <tr> 
                    <td> 
                        <input type="checkbox" name="article_ids[]" value="<?php echo $article['id']; ?>"> <!-- Crea un checkbox que, al enviarse el formulario, incluira el id del artículo en un array llamado article_ids. -->
                    </td>
                    <td><?php echo $article['name']; ?></td> <!-- Muestra el nombre del artículo en una celda de tabla -->
                    <td><?php echo $article['price']; ?> €</td> <!-- Muestra el precio del artículo en una celda de tabla, seguido del simbolo de euro -->
                </tr> 
            <?php endforeach; ?>

        </table>

        <button type="submit" name="add_to_cart">Añadir a la cesta</button>
        <button type="submit" name="empty_cart">Vaciar la cesta</button>
        <button type="submit" name="buy">Comprar</button>
        <button type="submit" name="logout">Cerrar sesión</button>
    </form>
</body>
</html>
