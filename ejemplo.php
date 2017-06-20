<?php

$arrContenido = array();

$arrAsociativoObjeto1 = array();
$arrAsociativoObjeto1["display"]= "JavaScript Tutorial";
$arrAsociativoObjeto1["url"]= "https://www.w3schools.com/js/default.asp";

$arrAsociativoObjeto2 = array();
$arrAsociativoObjeto2["display"]= "HTML Tutorial";
$arrAsociativoObjeto2["url"]= "https://www.w3schools.com/html/default.asp";

$arrAsociativoObjeto3 = array();
$arrAsociativoObjeto3["display"]= "CSS Tutorial";
$arrAsociativoObjeto3["url"]= "https://www.w3schools.com/css/default.asp";

$arrAsociativoObjeto4 = array();
$arrAsociativoObjeto4["display"]= "U-TAD";
$arrAsociativoObjeto4["url"]= "https://www.u-tad.com";

$arrContenido[] = $arrAsociativoObjeto1;
$arrContenido[] = $arrAsociativoObjeto2;
$arrContenido[] = $arrAsociativoObjeto3;
$arrContenido[] = $arrAsociativoObjeto4;

$jsonString = json_encode($arrContenido); 
echo $jsonString;


?>