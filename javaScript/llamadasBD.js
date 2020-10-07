var usuarios = [];
var avisos = [];


//CONSULTAS PELIGROSAS

function iniciarBD(){//Work in progress

    //localStorage.clear();

    let usuario;

    usuario = {nombre:"admin", apellido1:"none", apellido2:"none", nick:"admin", pass:"admin"};
    usuarios.push(usuario);

    usuario = {nombre:"Juan", apellido1:"Gonzalez", apellido2:"Ruiz", nick:"Juan33", pass:"123"};
    usuarios.push(usuario);

    usuario = {nombre:"Pedro", apellido1:"Rodriguez", apellido2:"Sanz", nick:"PedroRS", pass:"123"};
    usuarios.push(usuario);

    usuario = {nombre:"Antonio", apellido1:"Mejía", apellido2:"Pastor", nick:"AntonioMej", pass:"123"};
    usuarios.push(usuario);

    localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));


}




//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function crearUsuario(){
    let nombreLocal = document.getElementById("txNombre").value;
    let apellido1Local = document.getElementById("txApellido1").value;
    let apellido2Local = document.getElementById("txApellido2").value;
    let nickLocal = document.getElementById("txNick").value;
    let passLocal = document.getElementById("txPass").value;


    let usuario = {nombre:nombreLocal, apellido1:apellido1Local, apellido2:apellido2Local, nick:nickLocal, pass:passLocal};
    usuarios.push(usuario);

    localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

}

function borrarUsuario(){

    usuarioAEliminar = "Juan33";
    let id = "";

    usuarios = JSON.parse(localStorage.getItem("datosUsuarios"));

    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].nick == usuarioAEliminar){
            id = i;
        }
    }

    usuarios.splice(id, 1);
    localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

}

function modificarUsuario(){

    usuarios = JSON.parse(localStorage.getItem("datosUsuarios"));

    let posicion = usuarios.findIndex(p => p.nick == document.getElementById("txNick").value);

    if (posicion != -1) {
        usuarios[posicion].nombre = document.getElementById("txNombre").value;
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));
        location.reload();
    }else{
        alert("Usuario no encontrado");
    }

}


function leerUsuario(){

    usuarios = JSON.parse(localStorage.getItem("datosUsuarios"));

    for (let i = 0; i < usuarios.length; i++) {
        //Aquí añadiremos los campos a rellenar a la hora de la visualización de los elementos.
        console.log(usuarios[i].nick)
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