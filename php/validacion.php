<?php

include('C:\xampp\htdocs\The-Hawks\tp-1\php\database.php');

$EMAIL=$_POST['email'];
$PASSWORD=$_POST['password'];
$consulta = "SELECT* FROM users where email = '$EMAIL' and password ='$PASSWORD' ";
$resultado= mysqli_query($conexion, $consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
    header("location: ../Html/inicio.html");

}else{
    include("../Html/incio_De_Sesion.html");
    ?>
     <script src="../js/autentificacion.js"></script>
    <?php
    
}
mysqli_free_result($resultado);
mysqli_close($conexion);





?>