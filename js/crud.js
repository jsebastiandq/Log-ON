var db = firebase.firestore();

$(document).ready(function(){
	// User
	$('.sendUser').on("click", function( event ) {  
		event.preventDefault();
		var documento = $("#documento").val();
		var nombres = $("#nombres").val();
		var email = $("#email").val();
		var telefono = $("#telefono").val();
		addUser(documento,nombres,email,telefono);
	});
  
	function addUser(documento, nombres,email,telefono) {
	  db.collection("usuarios").add({
		documento: documento,
		nombres: nombres,
		email: email,
		telefono: telefono
	  })
	  .then(function(docRef) {;
		  alert("El usuario se agrego correctamente!");
		  userForm.reset(); 
	  })
	  .catch(function(error) {
		  //console.error("Error añadiendo datos...", error);
	  });
	};

	//Task
	$('.sendTask').on("click", function( event ) {  
		event.preventDefault();
		var tarea = $("#tarea").val();
		var usuario = $("#usuario").val();
		var prioridad = $("#prioridad").val();
		var relacionado = $("#relacionado").val();
		var estado = $("#estado").val();
		var fechai = $("#fechai").val();
		var fechaf = $("#fechaf").val();
		var descripcion = $("#descripcion").val();
		addTask(tarea,usuario,prioridad,relacionado,estado,fechai,fechaf,descripcion);
	});
  
	function addTask(tarea,usuario,prioridad,relacionado,estado,fechai,fechaf,descripcion) {
	  db.collection("tareas").add({
		tarea: tarea,
		usuario: usuario,
		prioridad: prioridad,
		relacionado: relacionado,
		estado: estado,
		fechai: fechai,
		fechaf: fechaf,
		descripcion: descripcion
	  })
	  .then(function(docRef) {;
		  alert("La tarea se agrego correctamente!");
		  taskForm.reset(); 
	  })
	  .catch(function(error) {
		  //console.error("Error añadiendo datos...", error);
	  });
	};

	
  });

  