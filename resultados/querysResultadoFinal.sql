SELECT persona.id_persona,relacion_persona_respuesta.id_persona,relacion_persona_respuesta.id_respuesta,respuestas.id_respuesta,respuestas.Anotacion
FROM persona
INNER JOIN relacion_persona_respuesta
on relacion_persona_respuesta.id_persona=persona.id_persona
INNER JOIN respuestas
ON respuestas.id_respuesta=relacion_persona_respuesta.id_respuesta




-------------

SELECT persona.id_persona,relacion_persona_respuesta.id_persona,relacion_persona_respuesta.id_respuesta,respuestas.id_respuesta,preguntas.enunciado,respuestas.descripcion,respuestas.Puntuacion,respuestas.Anotacion
FROM persona
INNER JOIN relacion_persona_respuesta
on relacion_persona_respuesta.id_persona=persona.id_persona
INNER JOIN respuestas
ON respuestas.id_respuesta=relacion_persona_respuesta.id_respuesta
INNER JOIN preguntas
on preguntas.id_pregunta=respuestas.id_pregunta



-----------
/*Misma query sin ids*/

SELECT persona.id_persona,preguntas.enunciado,respuestas.descripcion,respuestas.Puntuacion,respuestas.Anotacion
FROM persona 
INNER JOIN relacion_persona_respuesta
on relacion_persona_respuesta.id_persona=persona.id_persona 
INNER JOIN respuestas
ON respuestas.id_respuesta=relacion_persona_respuesta.id_respuesta
INNER JOIN preguntas
on preguntas.id_pregunta=respuestas.id_pregunta
WHERE persona.id_persona=10;

-------------
/*Insert*/

/*PERSONA*/
$sql = "INSERT INTO vidasostenible.persona (id_persona,sexo,pais,edad,domicilio,n_familiares,m2_vivienda,Nivel_Ingresos,Nivel_de_estudios,Ambito_y_titulacion,c_Autonoma)
VALUES ('$','$','$','$','$','$','$','$','$')";

$sql= "INSERT INTO persona (id_persona, pais, edad, domicilio, n_familiares, m2_vivienda, Nivel_Ingresos, Nivel_de_estudios, Ambito_y_titulacion, c_Autonoma) VALUES ('17', 'España', 'Entre 17 y 36', 'Un adosado', 'Dos', 'Entre 61 y 120 m2', 'Entre 5.000 y 10.000 € / $us', 'Tercer Grado', 'Ciencias de la Salud', '6')";
/*RESPUESTAS*/

$sql = "INSERT INTO vidasostenible.relacion_persona_respuesta
(id_persona,id_respuesta,id,id)
VALUES('$','$','$')"

$sql = "INSERT INTO relacion_persona_respuesta (id_persona, id_respuesta, id) VALUES ('17', '27', '228')";

/*PRoyecto integradpr*/

"Select asociacion.CIF,asociacion.nombre,asociacion.direccion,asociacion.municipio,asociacion.cod_postal,asociacion.e_mail,asociacion.tlf_fijo,asociacion.fecha_solicitud,asociacion_tipo.CIF,asociacion_tipo.tipo "
					+ "from gestionAsociaciones.asociacion  INNER join asociacion_tipo ON asociacion_tipo.CIF=asociacion.CIF ";
                    
                    
/*PPP*/
	
/*
	public void ModificarActividad(int id_actividad) {
		try {
			String sql = "SELECT nombre, n_destinatarios,lugar from gestionAsociaciones.actividad WHERE id_actividad = "
					+ id_actividad + ";";
			Statement stmt = connect.createStatement();
			ResultSet rset = stmt.executeQuery(sql);
			if (rset.next()) {
				MActividad.setJTextField(rset.getString((1)));
				MActividad.setTextArea_1(rset.getString((2)));
				MActividad.settFCod(rset.getString((3)));
				MActividad.setTextField_2(rset.getString((4)));
				MActividad.setTextField_3(rset.getString((5)));
			}
			rset.close();
			stmt.close();
		} catch (SQLException s) {
			s.printStackTrace();
		}
	}
*/

/*

	public void busquedaActividad(){
		try {
			
			
			String busqueda = MActividad.get
			
			
			String query;
			
			if (busqueda.equals("")) {
					query = "Select Responsable, Equipo_COD, FechadeInicio, FechaFin, EquipoPrestado, DestinodelPrestamo from proyectointegrador.prestamos where Responsable like '%" + responsable + "%' and FechadeInicio like '%"+ fechaInicio +"%' and FechaFin like '%"+ fechaFin +"%' and DestinodelPrestamo like '%"+ destino +"%' ;";
			} else {
				query = "Select Responsable, Equipo_COD, FechadeInicio, FechaFin, EquipoPrestado, DestinodelPrestamo from proyectointegrador.prestamos where Equipo_COD = "
						+ busqueda + ";";
			}

			Statement stmt = connect.createStatement();
			ResultSet rset = stmt.executeQuery(query);
			ResultSetMetaData rmsd = rset.getMetaData();
			rset.last();
			int a = rmsd.getColumnCount();
			int b = rset.getRow();
			rset.beforeFirst();
			ArraydatosActividad = new String[b][a];
			for (int i = 0; i < b; i++) {
				if (rset.next()) {
					for (int j = 0; j < a; j++) {
						ArraydatosActividad[i][j] = rset.getString((j + 1));
					}
				}
			}
			VActividades.setActividad(ArraydatosActividad);
			rset.close();
			stmt.close();
		} catch (SQLException s) {
			s.printStackTrace();
		}
	}
	}

*/

/*PRoyecto Integrador*/

Select asociacion.CIF,asociacion.nombre,asociacion.direccion,asociacion.municipio,asociacion.cod_postal,asociacion.e_mail,asociacion.tlf_fijo,asociacion.fecha_solicitud,representante.nombre from gestionAsociaciones.asociacion " 
					+ "INNER join representante "
					+ "ON representante.NIF_NIE=asociacion.representante ";




