<?php

  require 'C:\xampp\htdocs\The-Hawks\tp-1\php\database.php';

  $message = '';

  if (!empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['nombre']) && !empty($_POST['apellido'])) {
    $sql = "INSERT INTO users (email, password, nombre, apellido ) VALUES (:email, :password, :nombre, :apellido)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':email', $_POST['email']);
    $stmt->bindParam(':password', $_POST['password']);
    $stmt->bindParam(':nombre', $_POST['nombre']);
    $stmt->bindParam(':apellido', $_POST['apellido']);
    if ($stmt->execute()) {
      $message = 'Successfully created new user';
    } else {
      $message = 'Sorry there must have been an issue creating your account';
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Register</title>
    <link rel="icon" type="image/x-icon" href="../img/Mi proyecto.png" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../Css/register/register.css">
  </head>
  <body>
  <header class="d-flex">
      <div class="d-flex align-items-center">
        <img src="../img/Mi proyecto.png" alt="" />
      </div>
      <nav class="container d-flex justify-content-center align-items-center">
        <h4 class="text-black">Registra tu cuenta aquí</h4>
      </nav>
</header>
    <main>
      <form action="../html/incio_De_Sesion.html" method="POST">
      <section class="form-register">
      <h4 class="text-center">Complete el formulario:</h4>
      <input name="nombre" type="text" placeholder="Ingrese su nombre" class="controls" require>
      <input name="apellido" type="text" placeholder="Ingrese su apellido" class="controls" require>
        <input name="email" type="text" placeholder="Ingrese su email" class="controls" require>
        <input name="password" type="password" placeholder="Ingrese su contraseña" class="controls" require>
        <input name="confirm_password" type="password" placeholder="Ingrese nuevamente su contraseña" class="controls" require>
      
          <div class="d-flex justify-content-center">
          <input type="checkbox" required />
          <p class="m-2">
            Estoy de acuerdo con los <a href="#">terminos y condiciones</a>
          </p>
        </div>
        <div class="text-center">
          <button class="btn btn-outline-dark w-75 py-2" type="submit">
            Registrarme
          </button>
        </div>
        <p class="m-2">
          <a class="" href="../Html/incio_De_Sesion.html">¿Ya tienes una cuenta?</a>
        </p>      
      </section>
      </form>
    </main>

    <footer  class="d-flex flex-wrap justify-content-between align-items-center">
      <div class="container-fluid">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="#"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-black">© 2023 Hawks Security</span>
          </div>
        </footer>
      </div>
    </footer>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
