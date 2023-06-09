<?php

include('C:\xampp\htdocs\The-Hawks\tp-1\php\database.php');


?>
    
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
        header("location: ../Html/incio_De_Sesion.html");
    } else {
        header("location: ../Html/php/register.php");
    }
  }
?>

    <?php



?>