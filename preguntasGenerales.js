var xmlhttp = new XMLHttpRequest();
var url = "respuestasGenerales.json";
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
        myArr = documentJson.Generales;
        myFunction(myArr);
		
     }
};



xmlhttp.open("GET", url, true);
xmlhttp.send();



//FUNCIONES


function myFunction(arr) {
	
	
	
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
  
        
        if(arr[i].tipo_respuesta == 0 ){
			 if(arr[i].selector=="radio-buttons"){
				var arrRespuestas = arr[i].respuesta;
				for(j=0; j < arrRespuestas.length; j++){
					var label = document.createElement("label");
					label.setAttribute("class","label");
					var selectBox = document.createElement("input");
					selectBox.setAttribute("class"," generales selectBox");
					selectBox.setAttribute("size","10");
					selectBox.setAttribute("type","radio");
					selectBox.setAttribute("name", arr[i].id);
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
					range.setAttribute("class","generales range");
					range.setAttribute("type","range");
					range.setAttribute("min","0");
					range.setAttribute("max","5");
					for(j=0; j < arrRespuestas.length; j++){;//
					range.setAttribute("name",arrRespuestas[j].texto);
					range.setAttribute("value",arrRespuestas[j].id);
					}
					range.setAttribute("onchange", "obtenerId(this.value)");
					miFieldset.appendChild(range);
					
			}
			
			if(arr[i].selector=="select"){
				var arrRespuestas = arr[i].respuesta;
				var select = document.createElement("select");
				select.setAttribute("id","estiloSelect");
				select.setAttribute("class","generales");
				select.setAttribute("name",arr[i].id);
				console.log("name",arr[i].id);
				
				select.setAttribute("onchange", "obtenerId(this.value)");
				for(j=0; j < arrRespuestas.length; j++){;
					var option = document.createElement("option");
					option.setAttribute("id", arrRespuestas[j].id);	
					//option.setAttribute("name",arrRespuestas[j].texto);
					option.setAttribute("value",arrRespuestas[j].id);
									
					var nodoRespuesta = document.createTextNode(arrRespuestas[j].texto);
					option.appendChild(nodoRespuesta);
					select.appendChild(option);
					miFieldset.appendChild(select);
					console.log("identificador", arr[i].id);
					console.log("respuesta",arrRespuestas[j].texto);
				}
				
			} 
			
			if(arr[i].selector=="checkbox"){
				 var arrRespuestas = arr[i].respuesta;
            for(j=0; j < arrRespuestas.length; j++){
                var label = document.createElement("label");
                label.setAttribute("class","label");
                var selectBox = document.createElement("input");
                selectBox.setAttribute("class","generales selectBox");
                selectBox.setAttribute("size","10");
                selectBox.setAttribute("type","checkbox");
				selectBox.setAttribute("name",arr[i].id);
				selectBox.setAttribute("value",arrRespuestas[j].id);
				selectBox.setAttribute("id", arrRespuestas[j].id);
				selectBox.setAttribute("onclick", "obtenerId(id)");
				
                var nodoRespuesta = document.createTextNode(arrRespuestas[j].texto);
                miFieldset.appendChild(label);
                label.appendChild(selectBox);
                label.appendChild(nodoRespuesta);
				
                
            }
			}
            
        }else{
            var arrRespuestas = arr[i].respuesta;
            for(j=0; j < arrRespuestas.length; j++){
                var label = document.createElement("label");
                label.setAttribute("class","label");
                var selectBox = document.createElement("input");
                selectBox.setAttribute("class","generales selectBox");
                selectBox.setAttribute("size","10");
                selectBox.setAttribute("type","checkbox");
				selectBox.setAttribute("name",arr[i].id);
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

		
		

		
		
	
		
	







	