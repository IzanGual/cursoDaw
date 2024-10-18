<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>La tiendita de Izan</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>

<div id="wrapper">
<h1>Lista de productos</h1>

<?php
// Inicializar la lista de productos como un array
$productos = isset($_POST['productos']) ? json_decode($_POST['productos'], true) : [];

// Procesar el formulario al enviarlo
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener el nombre y la cantidad del formulario
    $nombre = strtolower(trim($_POST['nombre'])); // Convertir a minúsculas
    $cantidad = isset($_POST['cantidad']) ? intval($_POST['cantidad']) : 0;

    // Validar que el nombre no esté vacío
    if (empty($nombre)) {
        echo "<p style='color:red;'>El nombre del producto es necesario.</p>";
    } else {
        // Comprobar si el producto ya existe
        if (array_key_exists($nombre, $productos)) {
            // Si el producto existe y la cantidad es 0, eliminarlo
            if ($cantidad === 0) {
                unset($productos[$nombre]); // Eliminar el producto
                echo "<p style='color:green;'>El producto ha sido eliminado.</p>";
            } else {
                // Si la cantidad es positiva, actualizar el producto
                $productos[$nombre] = $cantidad;
                echo "<p style='color:green;'>La cantidad del producto ha sido actualizada.</p>";
            }
        } else {
            // Si el producto no existe y la cantidad es positiva, agregar
            if ($cantidad > 0) {
                $productos[$nombre] = $cantidad; // Añadir nuevo producto
                echo "<p style='color:green;'>El producto ha sido añadido a la lista.</p>";
            } else {
                echo "<p style='color:red;'>La cantidad debe ser mayor que 0 para añadir un nuevo producto.</p>";
            }
        }
    }
}

// Mostrar la lista de productos en una tabla
if (!empty($productos)) {
    echo "<table border='1'>";
    echo "<thead><tr><th>Producto</th><th>Cantidad</th></tr></thead>";
    echo "<tbody>";

    foreach ($productos as $nombre => $cantidad) {
        echo "<tr><td>$nombre</td><td>$cantidad</td></tr>";
    }

    echo "</tbody>";
    echo "</table>";
} else {
    echo "<p>No hay productos en la lista.</p>";
}
?>

<h2>Introduce los productos</h2>
<form method="POST" action="">
    <p>Producto</p>
    <input type="text" name="nombre" required>

    <p>Cantidad</p>
    <input type="number" name="cantidad" min="0">

    <!-- Campo oculto para pasar la lista de productos como JSON -->
    <input type="hidden" name="productos" value="<?php echo htmlspecialchars(json_encode($productos)); ?>">

    <br><br>
    <button type="submit">Añadir/Modificar producto</button>
</form>

</div>

</body>
</html>

