<?php
$servername = "localhost";
$user = "root";
$password = "";
$dbname = "vidasostenible";
$conn = new mysqli($servername, $user,$password,
$dbname);
// Check connection
if ($conn->connect_error) {
die("Error: " . $conn->connect_error);
}
mysqli_set_charset($conn, "utf8");
?>

<?php
$sql = "SELECT *
FROM respuestas 
JOIN preguntas ON preguntas.id_pregunta = respuestas.id_pregunta 
JOIN bloques ON bloques.id_bloque = preguntas.id_bloque
LEFT JOIN dependenciapregunta_respuesta ON dependenciapregunta_respuesta.id_Pregunta = preguntas.id_pregunta 
order by preguntas.orden";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	
$Preguntas = array();


$preguntaAnterior=null;
$arrAsociativoPadre = array();
	
$i = 0;
while($row = $result->fetch_assoc()) {
	
	//echo $row['id_pregunta'];
	//echo "<br/>".$preguntaAnterior."<br/>";	
	
	if($row['id_pregunta'] != $preguntaAnterior){
		
		// Asigno la anterior pregunta
		if($i !=0){
			$arrAsociativoPregunta["respuesta"] = $respuestas;
			$Preguntas[] = $arrAsociativoPregunta;
		}
		
		// Creo la nueva
		
		$arrAsociativoPregunta = array();
		$arrAsociativoPregunta["texto_pregunta"] = $row['enunciado'];
		$arrAsociativoPregunta["id"] = $row['id_pregunta'];
		$idPregunta=$row['id_pregunta'];
		$arrAsociativoPregunta["tipo_respuesta"] = $row['Multirespuesta'];
		$arrAsociativoPregunta["Obligatoria"] = $row['Obligatoria'];
		$arrAsociativoPregunta["selector"] = $row['selector'];
		$arrAsociativoPregunta["orden"] = $row['orden'];
		$idPreguntaDependencia=$row['id_Pregunta'];
		if($idPregunta==$idPreguntaDependencia){
			$arrAsociativoPregunta["DependenciaRespuesta"] = $row['id_Respuesta'];
		}else{
			$arrAsociativoPregunta["DependenciaRespuesta"] = null;
		}
		
		$respuestas = array();
	
	}
	
	$arrAsociativoRespuesta=array();
	$arrAsociativoRespuesta["id"] = $row["id_respuesta"] ;
	
		$arrAsociativoRespuesta["texto"] = $row["descripcion"];
	
	
		$arrAsociativoRespuesta["puntuacion"] = $row["Puntuacion"];
			$arrAsociativoRespuesta["anotacion"] = $row["Anotacion"];	
	$respuestas[] =$arrAsociativoRespuesta;	
	
	$preguntaAnterior = $row['id_pregunta'];
	
	
	$i++;
	//
	
	
	// ;
	
	
	//
	
	
	
	
	
}
 // DE LA ULTIMA Pregunta
			$arrAsociativoPregunta["respuesta"] = $respuestas;
			$Preguntas[] = $arrAsociativoPregunta; 
 
$arrAsociativoPadre["Preguntas"]= $Preguntas;
$jsonString = json_encode($arrAsociativoPadre, JSON_PRETTY_PRINT); 

echo $jsonString;



} else {
echo "0 results";
}
$conn->close(); // cierre de conexión con la BBDD
?>
