var usuarios = [];
var avisos = [];


//CONSULTAS PELIGROSAS

function reiniciarBD(){//Work in progress

/*
    fetch("http://localhost:63342/Equipo04-Reto01/datosBD/usuarios.php",
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        })

 */


}




//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function crearUsuario(){
    nombreLocal = document.getElementById("txNombre").value;
    apellido1Local = document.getElementById("txApellido1").value;
    apellido2Local = document.getElementById("txApellido2").value;
    nickLocal = document.getElementById("txNick").value;
    passLocal = document.getElementById("txPass").value;


    let usuario = {nombre:nombreLocal, apellido1:apellido1Local, apellido2:apellido2Local, nick:nickLocal, pass:passLocal};
    usuarios.push(usuario);

    localStorage.setItem('datosUsuario', JSON.stringify(usuarios));

    //CON FICHERO

    /*
    fetch("http://localhost:63342/Equipo04-Reto01/datosBD/usuarios.php", {

        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.log('Error:', error));

    console.log("BB")
*/
}

function borrarUsuario(){

}

function buscarUsuario(){

}

function leerUsuarios(){

    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(i))
    }
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