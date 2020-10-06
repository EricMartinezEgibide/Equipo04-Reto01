var usuarios = [];
var avisos = [];


//CONSULTAS PELIGROSAS



//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function crearUsuario(){//EN PROGRESO
    nombreLocal = document.getElementById("txNombre").value;
    apellido1Local = document.getElementById("txApellido1").value;
    apellido2Local = document.getElementById("txApellido2").value;
    nickLocal = document.getElementById("txNick").value;
    passLocal = document.getElementById("txPass").value;


    let usuario = {nombre:nombreLocal, apellido1:apellido1Local, apellido2:apellido2Local, nick:nickLocal, pass:passLocal};
    usuarios.push(usuario);


    fetch("http://localhost:63342/Equipo04-Reto01/datosBD/usuarios.php", {
        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log('Error:', error));
}


function borrarUsuario(){

}

function buscarUsuario(){

}

function leerUsuarios(){

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

function leerUsuarios(){
    
}