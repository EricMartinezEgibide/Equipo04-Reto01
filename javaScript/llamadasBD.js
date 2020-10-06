var usuarios = [];
var avisos = [];

//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function crearUsuario(){//EN PROGRESO
    nombreLocal = document.getElementById("txNombre").value;
    apellido1Local = document.getElementById("txApellido1").value;
    apellido2Local = document.getElementById("txApellido2").value;
    nickLocal = document.getElementById("txNick").value;
    passLocal = document.getElementById("txPass").value;


    let usuario = {nombre:nombreLocal, apellido1:apellido1Local, apellido2:apellido2Local, nick:nickLocal, pass:passLocal};
    usuarios.push(usuario);

    actualizarUsuarios();
}


function actualizarUsuarios() { //EN PROGRESO
/*
    localStorage.setItem('datosBD/usuarios', JSON.stringify(usuarios));

    // Envio de los datos al servidor.
    fetch("http://localhost:63342/ejemploFetchLocalStorage/datosRecibidos.php", {
        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log('Error:', error));
 */
}


function borrarUsuario(){

}

function buscarUsuario(){

}


//FUNCIONES AVISOS Atributos: titulo, descripcion, fecha, prioridad

function crearAviso(){

}

function actualizarAvisos(){

}

function borrarAviso(){

}

function buscarAviso(){

}