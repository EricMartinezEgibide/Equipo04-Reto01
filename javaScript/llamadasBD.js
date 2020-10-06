var usuarios = [];
var avisos = [];


//CONSULTAS PELIGROSAS

/*function reiniciarBD(){
    fetch("http://localhost:63342/Equipo04-Reto01/datosBD/usuarios.php", {
        method: 'DELETE',
    }).catch(error => console.log('Error:', error));
}

 */


//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function crearUsuario(){//EN PROGRESO

    console.log("AA")


    nombreLocal = document.getElementById("txNombre").value;
    apellido1Local = document.getElementById("txApellido1").value;
    apellido2Local = document.getElementById("txApellido2").value;
    nickLocal = document.getElementById("txNick").value;
    passLocal = document.getElementById("txPass").value;


    let usuario = {nombre:nombreLocal, apellido1:apellido1Local, apellido2:apellido2Local, nick:nickLocal, pass:passLocal};
    usuarios.push(usuario);


    localStorage.setItem('datosUsuario', JSON.stringify(usuarios));

    fetch("http://localhost:63342/Equipo04-Reto01/datosBD/usuarios.php", {

        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log('Error:', error));

    console.log("BB")

}


function borrarUsuario(){

}

function buscarUsuario(){

}

function leerUsuarios(){
    console.log("Me ejecuto");

    let usuariosString;

    document.getElementById("todosFichero").value = "";
    fetch('http://localhost:63342/Equipo04-Reto01/datosBD/usuarios.php')
        .then(response => response.json()) // convierte la respuesta recibida en json. También es una promesa.
        .then(data => data.forEach(elemento => usuariosString += elemento.nombre + " " + elemento.edad + "\n"));


    console.log(usuariosString);

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