<?php
$servername = "localhost";
$user = "root";
$password = "";
$dbname = "vidasostenible";
$conn = new mysqli($servername, $user,$password,$dbname);
// Check connection
if ($conn->connect_error) {
die("Error: " . $conn->connect_error);
}else
//echo "Conexión con BBDD correcta" ;
?>


<?php

//var_dump($_POST);


$id_persona;
$pais = $_POST['pais'];
$edad = $_POST['edad'];
$domicilio = $_POST['casa'];
$n_familiares = $_POST['hogar'];
$m2_vivienda = $_POST['metros'];
$Nivel_Ingresos = $_POST['ingresos'];
$Nivel_de_Estudios = $_POST['estudios'];
$Ambito_y_titulacion = $_POST['titulacion'];
$CCAA = $_POST['CCAA'];
$last_id;


$sql = "INSERT INTO persona (pais, edad,domicilio,n_familiares,m2_vivienda, Nivel_Ingresos, Nivel_de_Estudios, Ambito_y_Titulacion, CCAA)";
$sql .= " VALUES ('".$pais."','".$edad."','".$domicilio."',".$n_familiares.",".$m2_vivienda.",".$Nivel_Ingresos.",".$Nivel_de_Estudios.",".$Ambito_y_titulacion.",".$CCAA.")";

//echo $sql;

//die();


if ($conn->query($sql) === TRUE) {
	//echo "<br/>Nuevo registro realizado correctamente<br/>";
	$last_id = $conn->insert_id;
	foreach($_POST as $key=>$value){
		$mystring = $key;
		$findme   = 'pregunta';
		$pos = strpos($mystring, $findme);

		// Nótese el uso de ===. Puesto que == simple no funcionará como se espera
		// porque la posición de 'a' está en el 1° (primer) caracter.
		if ($pos === false) {
			//echo "La cadena '$findme' no fue encontrada en la cadena '$mystring'<br/>";

		

		} else {
			//echo "La cadena '$findme' fue encontrada en la cadena '$mystring'<br/>";
			//echo " y existe en la posición $pos <br/>";
			$sql = "INSERT INTO relacion_persona_respuesta (id_persona, id_respuesta)";
			$sql .= " VALUES (".$last_id.",".$value.")";
			
			//echo "<br/>  ". $sql. "<br/>";
			
			//echo "<br/>_____________________ <br/>";
			
			if ($conn->query($sql) === TRUE) {
				//echo "Nuevo respuesta insertada correctamente";
			}else {
				//echo "Error: " . $sql . "<br>" . $conn->error;
			}

			
			
		}
	}
} else {
	/*echo "Error: " . $sql . "<br>" . $conn->error;*/
}


header('Location: resultados/ResumenFinalPHP.php?id_usuario='.$last_id);

?>