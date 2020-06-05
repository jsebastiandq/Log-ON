var db = firebase.firestore(); //Mando a llamar la instancia de base de datos

    var selectUserslog = document.getElementById('usuario');//Se llama el selected
    selectUserslog.innerHTML = '';
    selectUserslog.innerHTML += `
            ´
            ` //Agrego un option por default
    db.collection("usuarios").onSnapshot((querySnapshot) => { //Se llaman los datos
            querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data().name}`);
            selectUserslog.innerHTML += `
            <option value="${doc.data().nombres}">${doc.data().nombres}</option>
            ` //Aquí agrego los options de acuerdo a la base de datos.
        });
    });