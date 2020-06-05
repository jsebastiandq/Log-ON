var db = firebase.firestore();

//Task
//Delete
function deleteTask(id){
	if (confirm('¿Estas seguro que quieres eliminar?')) {
		db.collection("tareas").doc(id).delete().then(function() {
			console.log("Document successfully deleted!");
		}).catch(function(error) {
			console.error("Error removing document: ", error);
		});
	}else {
		console.log('No se borro el Item');
	  } 
}

//Edit
function editTask(id,tarea,usuario,prioridad,relacionado,estado,fechai,fechaf,descripcion){
	var ediTask = document.getElementById('ediTask');
	ediTask.innerHTML = '';
	ediTask.innerHTML += `
	<h2 class="main__title">¿Que tareas quieres actualizar?</h2>
	<div class="row"> 
	<div class="form-group col-md-6">
		<label>Nombre de la Tarea</label>
		<input type="text" class="form-control" id="tarea" placeholder="Nombre de Tarea" required>
	</div>
	<div class="form-group col-md-6">
	<label>Responsable</label>
		<input type="text" class="form-control" id="usuario" placeholder="Nombre de Tarea" readonly>
	</div>
</div> 
<div class="row"> 
	<div class="form-group col-md-4">
		<label>Prioridad</label>
		<select class="form-control" id="prioridad">
			<option value="Baja">Baja</option> 
			<option value="Media">Media</option>    
			<option value="Alta">Alta</option>            
		</select>
	</div>
	<div class="form-group col-md-4">
		<label>Relacionado</label>
		<select class="form-control" id="relacionado">
			<option value="Proyecto">Proyecto</option> 
			<option value="Factura">Factura</option>    
			<option value="Cliente">Cliente</option>
			<option value="Soporte">Soporte</option>             
		</select>
	</div>
	<div class="form-group col-md-4">
		<label>Estado</label>
		<select class="form-control" id="estado">
			<option value="No iniciada">No iniciada</option> 
			<option value="En proceso">En proceso</option>    
			<option value="Testear">Testear</option>
			<option value="Completada">Completada</option>             
		</select>
	</div>
</div> 
<div class="row">       
	<div class="form-group col-md-6">
	<label>Fecha de Inicio</label>
	<input type="date" class="form-control" id="fechai" required="required" required value="<?php echo date('Y-m-d'); ?>" readonly/>
	</div>             
	<div class="form-group col-md-6">
	<label>Fecha de final</label>
	<input type="date" class="form-control" id="fechaf" required="required" value="<?php echo date('Y-m-d'); ?>">
	</div>
</div>
<div class="row">       
	<div class="form-group col-md-12">
	<label>Descripcion de tarea</label>
	<textarea class="form-control" id="descripcion" required="required" placeholder="Ingresa aqui el comentario de la tarea..." required></textarea>
	</div>             
</div>  
	<button class="btn btn-warning" id="boton" onclick="guardar()">Guardar</button>
	`
	document.getElementById('tarea').value = tarea;
	document.getElementById('usuario').value = usuario;
	document.getElementById('prioridad').value = prioridad;
	document.getElementById('relacionado').value = relacionado;
	document.getElementById('estado').value = estado;
    document.getElementById('fechai').value = fechai;
	document.getElementById('fechaf').value = fechaf;
	document.getElementById('descripcion').value = descripcion;

    boton.onclick = function(){
        var sendChangeTask = db.collection("tareas").doc(id);
		var tarea = document.getElementById('tarea').value;
		var usuario = document.getElementById('usuario').value;
		var prioridad = document.getElementById('prioridad').value;
		var relacionado = document.getElementById('relacionado').value;
		var estado = document.getElementById('estado').value;
        var fechai = document.getElementById('fechai').value;
		var fechaf = document.getElementById('fechaf').value;
		var descripcion = document.getElementById('descripcion').value;

        return sendChangeTask.update({
			tarea: tarea,
			usuario: usuario,
			prioridad: prioridad,
			relacionado: relacionado,
			estado: estado,
			fechai: fechai,
			fechaf: fechaf,
			descripcion: descripcion
        })
        .then(function() {
			console.log("Document successfully updated!");
			document.getElementById('tarea').value = '';
			document.getElementById('usuario').value = '';
			document.getElementById('prioridad').value = '';
			document.getElementById('relacionado').value = '';
			document.getElementById('estado').value = '';
            document.getElementById('fechai').value = '';
			document.getElementById('fechaf').value = '';
			document.getElementById('descripcion').value = '';
			document.getElementById('ediTask').innerHTML = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

function viewTask(id,tarea,usuario,prioridad,relacionado,estado,fechai,fechaf,descripcion){
	var viewTask = document.getElementById('viewTask');
	viewTask.innerHTML = '';
	viewTask.innerHTML += `
	<h2 class="main__title">¡Estas visualizando una tarea!</h2>
	<div class="row"> 
	<div class="form-group col-md-6">
		<label>Nombre de la Tarea</label>
		<input type="text" class="form-control" id="tarea" readonly>
	</div>
	<div class="form-group col-md-6">
	<label>Responsable</label>
		<input type="text" class="form-control" id="usuario" readonly>
	</div>
</div> 
<div class="row"> 
	<div class="form-group col-md-4">
		<label>Prioridad</label>
		<input type="text" class="form-control" id="prioridad" readonly>
	</div>
	<div class="form-group col-md-4">
		<label>Relacionado</label>
		<input type="text" class="form-control" id="relacionado" readonly>
	</div>
	<div class="form-group col-md-4">
		<label>Estado</label>
		<input type="text" class="form-control" id="estado" readonly>
	</div>
</div> 
<div class="row">       
	<div class="form-group col-md-6">
	<label>Fecha de Inicio</label>
	<input type="date" class="form-control" id="fechai" readonly>
	</div>             
	<div class="form-group col-md-6">
	<label>Fecha de final</label>
	<input type="date" class="form-control" id="fechaf" readonly>
	</div>
</div>
<div class="row">       
	<div class="form-group col-md-12">
	<label>Descripcion de tarea</label>
	<textarea class="form-control" id="descripcion" required="required" placeholder="Ingresa aqui el comentario de la tarea..." readonly></textarea>
	</div>             
</div>   
	<button class="btn btn-danger" id="boton" onclick="closeTask()">Cerrar</button>
	`
	document.getElementById('tarea').value = tarea;
	document.getElementById('usuario').value = usuario;
	document.getElementById('prioridad').value = prioridad;
	document.getElementById('relacionado').value = relacionado;
	document.getElementById('estado').value = estado;
    document.getElementById('fechai').value = fechai;
	document.getElementById('fechaf').value = fechaf;
	document.getElementById('descripcion').value = descripcion;

    boton.onclick = function(){
		document.getElementById('tarea').value = '';
		document.getElementById('usuario').value = '';
		document.getElementById('prioridad').value = '';
		document.getElementById('relacionado').value = '';
		document.getElementById('estado').value = '';
		document.getElementById('fechai').value = '';
		document.getElementById('fechaf').value = '';
		document.getElementById('descripcion').value = '';
		document.getElementById('viewTask').innerHTML = '';
    }
}

//Read Tasks
var viewTasks = document.getElementById('viewTasks');
db.collection("tareas").onSnapshot((querySnapshot) => {
viewTasks.innerHTML = '';
querySnapshot.forEach((doc) => {
        viewTasks.innerHTML += `
		<tr>
		<td>${doc.data().estado}</td>
		<td>${doc.data().tarea}</td>
        <td>${doc.data().usuario}</td>
		<td>${doc.data().fechai}</td>
		<td>${doc.data().fechaf}</td>
		<td><button class="btn btn-info" onclick="viewTask('${doc.id}','${doc.data().tarea}','${doc.data().usuario}','${doc.data().prioridad}','${doc.data().relacionado}','${doc.data().estado}','${doc.data().fechai}','${doc.data().fechaf}','${doc.data().descripcion}')">Ver</button></td>
		<td><button class="btn btn-warning" onclick="editTask('${doc.id}','${doc.data().tarea}','${doc.data().usuario}','${doc.data().prioridad}','${doc.data().relacionado}','${doc.data().estado}','${doc.data().fechai}','${doc.data().fechaf}','${doc.data().descripcion}')">Editar</button></td>
		<td><button class="btn btn-danger" onclick="deleteTask('${doc.id}')">Eliminar</button></td>
        </tr>
        `
	});
	
  });