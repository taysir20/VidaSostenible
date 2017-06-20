<?php
//Datos de conexion
$servername = "localhost";
$user = "root";
$password = "";
$dbname = "vidasostenible";
$conn = new mysqli($servername, $user, $password, $dbname);
//prueba conexion BBDD
if ($conn->connect_error) {
    die("Error: " . $conn->connect_error);
} else
    mysqli_set_charset($conn, "utf8");
?>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>Encuesta_Vida_Sostenible</title>
		 <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href = "mediaQueries.css">
        <script src="preguntas.js"></script>
		
    </head>
    <body>
        <header>
            <h1>Encuesta huella ecológica</h1>
        </header> 
    </body>
</html>
<?php
//Sentencia select
//$sql = "SELECT ID,Nombre FROM lenguajes.usuario";
$sql = "SELECT persona.id_persona,preguntas.enunciado,respuestas.descripcion,respuestas.Puntuacion,respuestas.Anotacion
FROM persona 
INNER JOIN relacion_persona_respuesta
on relacion_persona_respuesta.id_persona=persona.id_persona 
INNER JOIN respuestas
ON respuestas.id_respuesta=relacion_persona_respuesta.id_respuesta
INNER JOIN preguntas
on preguntas.id_pregunta=respuestas.id_pregunta
WHERE persona.id_persona=" .$_GET['id_usuario']."";

$total = 0;
$num = 0;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // var_dump($row);
//echo" id_persona: ".$row["id_persona"]."<br>";
        echo"<div>";
        echo "<div class='preguntas'>";
        echo"<h4>";
        echo " Pregunta " . "" . $num++ . ": " . $row["enunciado"] . "<br>";
        echo"</h4>";
        echo"</preguntas>";

        echo "<div class='respuestas'>";
        echo"<h3>";
        echo" Respuesta: " . $row["descripcion"] . "<br>";
        echo"</h3>";
        echo "</div>";

        echo"<h3>";
        echo" Anotacion: " . $row["Anotacion"] . "<br>";
        echo"</h3>";

        echo" " . "<br>";

        echo"</div>";

        $total += $row["Puntuacion"];
//echo" puntuacion: ".$row["puntuacion"]."<br>";
    }
    echo"<div class=Thuella>";
    echo"<h1>";
    echo 'total huella ecologica: ' . $total . " puntos";
    echo"</h1>";
    echo"</div>";
} else {
    echo "ningun resultado";
}
/*Puntuación menor de 25: huella ecológica sostenible (un planeta)
Entre 25 y 50: insostenible intermedia (2-3 planetas)
Entre 50 y 100: completamente insostenible (Cinco o más planetas)
*/
echo "<div class='planet'>";

if($total<=24 ){
    
   
    echo"<h3>";echo "Si todo el  mundo fuese como tu se necesitaria."; echo"</h3>";
    echo"<div class='imgPlanet1'>";
    echo"<img src='globe.png'>";
    echo"</div>";
   // echo"<h3>";echo "Para vivir"."</h3>";
    echo"<h3>"; echo "Tu huella ecológica es totalmete sostenible,"." deberían existir mas personas como tu,"." gracias por contribuir con el planeta.";echo"</h3>";

    
}elseif($total>=25 && $total<=49){ 
    echo"<h3>";echo "Si todo el  mundo fuese como tu se necesitaria."; echo"</h3>";
    echo"<div class='imgPlanet2'>";
    echo"<img src='globe.png'>";
    echo"<img src='globe.png'>";
    echo"<img src='globe.png'>";
    echo"</div>";
    //echo"<h3>";echo "Para vivir"."</h3>";
    echo"<h3>";echo "Tu huella ecológica en terminos intermedios no es sostenible "." deberías trabajarlo mas,"." tu puedes mejorar por el bien de todos.";echo"</h3>";

}elseif($total>=50){
    echo"<h3>";echo "Si todo el  mundo fuese como tu se necesitaria."; echo"</h3>";
    echo"<div class='imgPlanet3'>";
    echo"<img src='globe.png'>";
    echo"<img src='globe.png'>";
    echo"<img src='globe.png'>";
    echo"<img src='globe.png'>";
    echo"<img src='globe.png'>";
    echo"</div>";
   // echo"<h3>";echo "Para vivir"."</h3>";
    echo"<h3>";echo "Tu huella ecológica es completamente insostenible,"." vas a tener que hacer un gran esfuerzo para ayudar al planeta.";echo"</h3>";

}else{
    
}
echo "<div>";
$conn->close();
?>

