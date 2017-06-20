var xmlhttp = new XMLHttpRequest();
var url = "prueba1.php";
var myArr;
var select;
var miDiv;
var miFieldset;
var miLegend;
var nodoPregunta;
var idPregunta;
var resp; 
var arrayOrden= new Array;

xmlhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        myArr = documentJson.Preguntas;
        myFunction2(myArr);
		
     }
};



xmlhttp.open("GET", url, true);
xmlhttp.send();



//FUNCIONES


function myFunction2(arr) {
	
	
	
    select = document.getElementById("formulario");
    miDiv = document.createElement("div");
    miDiv.setAttribute("class","background");
    select.appendChild(miDiv);

	 
    for(i = 0; i < arr.length; i++) {
		

        miFieldset = document.createElement("fieldset");
		miFieldset.setAttribute("id",i);
		miFieldset.setAttribute("class", "preguntas depende"+arr[i].DependenciaRespuesta);
        miLegend = document.createElement("legend");
        nodoPregunta = document.createTextNode(arr[i].texto_pregunta);
		miDiv.appendChild(miFieldset);
        miFieldset.appendChild(miLegend);
        miLegend.appendChild(nodoPregunta);
		
		if(arr[i].DependenciaRespuesta==null){
			
			miFieldset.style.display="block";
			idPregunta=miFieldset.getAttribute("id");

			
		}else{
			
			miFieldset.style.display="none";
		}
  
		////console.log("PREGUNTA " + arr[i].texto_pregunta + " TIPO " + arr[i].tipo_respuesta + " SELECTOR " + arr[i].tipo_selector);
        
        if(arr[i].tipo_respuesta == 0 ){
			 if(arr[i].selector=="radio-buttons"){
				
				var arrRespuestas = arr[i].respuesta;
				for(j=0; j < arrRespuestas.length; j++){
					var label = document.createElement("label");
					label.setAttribute("class","label");
					var selectBox = document.createElement("input");
					selectBox.setAttribute("class","encuesta selectBox");
					selectBox.setAttribute("size","10");
					selectBox.setAttribute("type","radio");
					selectBox.setAttribute("name","pregunta" + arr[i].id);
					selectBox.setAttribute("value",arrRespuestas[j].id);
					selectBox.setAttribute("id", arrRespuestas[j].id);					
					selectBox.setAttribute("onclick", "obtenerId(id)");
					var nodoRespuesta = document.createTextNode(arrRespuestas[j].texto);
					miFieldset.appendChild(label);
					label.appendChild(selectBox);
					label.appendChild(nodoRespuesta);
				}
			 }
				if(arr[i].selector=="range"){
					var range = document.createElement("input");
					range.setAttribute("class","encuesta range");
					range.setAttribute("type","range");
					range.setAttribute("min","0");
					range.setAttribute("max","5");
					for(j=0; j < arrRespuestas.length; j++){;//
					range.setAttribute("name","pregunta" + arr[i].id);
					range.setAttribute("value",arrRespuestas[j].id);
					}
					range.setAttribute("onchange", "obtenerId(this.value)");
					miFieldset.appendChild(range);
					
			}if(arr[i].selector=="select"){
				var arrRespuestas = arr[i].respuesta;
				var select = document.createElement("select");
				select.setAttribute("id","estiloSelect");
				select.setAttribute("class","encuesta");
				select.setAttribute("name","pregunta" + arr[i].id);
				select.setAttribute("onchange", "obtenerId(this.value)");
				
				var option = document.createElement("option");

				//option.setAttribute("name",arrRespuestas[j].texto);
				option.setAttribute("value","");
								
				var nodoRespuesta = document.createTextNode("seleccione una");
				option.appendChild(nodoRespuesta);
				select.appendChild(option);
				miFieldset.appendChild(select);
				
				
				
				for(j=0; j < arrRespuestas.length; j++){;
					var option = document.createElement("option");
					option.setAttribute("id", arrRespuestas[j].id);	
					//option.setAttribute("name",arrRespuestas[j].texto);
					option.setAttribute("value",arrRespuestas[j].id);
									
					var nodoRespuesta = document.createTextNode(arrRespuestas[j].texto);
					option.appendChild(nodoRespuesta);
					select.appendChild(option);
					miFieldset.appendChild(select);
				}
				
			} 
			if(arr[i].selector=="checkbox"){
				 var arrRespuestas = arr[i].respuesta;
            for(j=0; j < arrRespuestas.length; j++){
                var label = document.createElement("label");
                label.setAttribute("class","label");
                var selectBox = document.createElement("input");
                selectBox.setAttribute("class","encuesta selectBox");
                selectBox.setAttribute("size","10");
                selectBox.setAttribute("type","checkbox");
				selectBox.setAttribute("name","pregunta"+ arr[i].id + "." + j);
				selectBox.setAttribute("value",arrRespuestas[j].id);
				selectBox.setAttribute("id", arrRespuestas[j].id);
				selectBox.setAttribute("onclick", "obtenerId(id)");
                var nodoRespuesta = document.createTextNode(arrRespuestas[j].texto);
                miFieldset.appendChild(label);
                label.appendChild(selectBox);
                label.appendChild(nodoRespuesta);
				
                
            }
			}
            
        }else{ // arrtipo respeusta == 1
            var arrRespuestas = arr[i].respuesta;
			//console.log(arr[i].id);
            for(j=0; j < arrRespuestas.length; j++){
                var label = document.createElement("label");
                label.setAttribute("class","label");
                var selectBox = document.createElement("input");
                selectBox.setAttribute("class","encuesta selectBox");
                selectBox.setAttribute("size","10");
                selectBox.setAttribute("type","checkbox");
				selectBox.setAttribute("name","pregunta"+ arr[i].id + "_" + j);
				selectBox.setAttribute("value",arrRespuestas[j].id);
				selectBox.setAttribute("id", arrRespuestas[j].id);
				selectBox.setAttribute("onclick", "obtenerId(id)");
                var nodoRespuesta = document.createTextNode(arrRespuestas[j].texto);
                miFieldset.appendChild(label);
                label.appendChild(selectBox);
                label.appendChild(nodoRespuesta);   
            }	
        }   
        
    }
	
    
}


function obtenerId(id){
	
	var clase = "depende" + id;
	
	var dependientes = document.getElementsByClassName(clase);
	for(i=0;i<dependientes.length;i++){
		
		dependientes[i].style.display='block';
		
	}
}