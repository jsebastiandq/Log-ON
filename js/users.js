var db = firebase.firestore();

//Edit
function editUsers(id,documento,nombres,email,telefono){
	var editUser = document.getElementById('editUser');
	editUser.innerHTML = '';
	editUser.innerHTML += `
	<h2 class="main__title">¿Que datos quieres actualizar?</h2>
	<div class="row"> 
		<div class="form-group col-md-6">
			<input type="text" id="documento" placeholder="Documento" class="form-control">
		</div>
		<div class="form-group col-md-6">
			<input type="text" id="nombres" placeholder="Nombre Completo" class="form-control">
		</div>
	</div>
	<div class="row"> 
		<div class="form-group col-md-6">
			<input type="email" id="email" placeholder="email" class="form-control">
		</div>
		<div class="form-group col-md-6">
			<input type="number" id="telefono" placeholder="Telefono" class="form-control">
		</div>
	</div>
	<button class="btn btn-info" id="boton" onclick="guardar()">Guardar</button>
	`
	document.getElementById('documento').value = documento;
    document.getElementById('nombres').value = nombres;
    document.getElementById('email').value = email;
    document.getElementById('telefono').value = telefono;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("usuarios").doc(id);
		var documento = document.getElementById('documento').value;
        var nombres = document.getElementById('nombres').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;

        return washingtonRef.update({
            documento: documento,
            nombre: nombres,
			email: email,
			telefono: telefono
        })
        .then(function() {
			console.log("Document successfully updated!");
			document.getElementById('documento').value = '';
            document.getElementById('nombres').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefono').value = '';
			document.getElementById('editUser').innerHTML = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}

//Delete
function deleteUsers(id){
	if (confirm('¿Estas seguro que quieres eliminar?')) {
		db.collection("usuarios").doc(id).delete().then(function() {
			console.log("Document successfully deleted!");
		}).catch(function(error) {
			console.error("Error removing document: ", error);
		});
	}else {
		console.log('No se borro el Item');
	  } 
}

$(document).ready(function(){

    //Read Users
    var viewUsers = document.getElementById('viewUsers');
    db.collection("usuarios").onSnapshot((querySnapshot) => {
    viewUsers.innerHTML = '';
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().first}`);
        viewUsers.innerHTML += `
        <tr>
        <td>${doc.data().documento}</td>
        <td>${doc.data().nombres}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().telefono}</td>
        <td><button class="btn btn-warning" onclick="editUsers('${doc.id}','${doc.data().documento}','${doc.data().nombres}','${doc.data().telefono}','${doc.data().email}')">Editar</button></td>
        <td><button class="btn btn-danger" onclick="deleteUsers('${doc.id}')">Eliminar</button></td>
        </tr>
        `
        });
    });
});