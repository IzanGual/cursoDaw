<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tendeta Login</title>
</head>
<body>
    <h1>login.php</h1>
    <h3>Introduce las credenciales, para que funcione [izan , 1234]</h3>
   
    <div id="wrapper">
         <!-- Creamos el formulario con action que llamara a la autentificación -->
        <form action="autentificacion.php" method="POST">
            <p>Introduce el usuario</p>
            <input type="text" name="user" required>
            <p>Introduce la contraseña</p>
            <input type="password" name="contra" required>
            <button type="submit">Enviar</button>
        </form>
    </div>
    
</body>
</html>
