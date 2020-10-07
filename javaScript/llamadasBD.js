let usuarios = [];
let avisos = [];


//CONSULTAS PELIGROSAS

function iniciarBD(){//Work in progress

    /*let usuario;

    usuario = {nombre:"admin", apellido1:"none", apellido2:"none", nick:"admin", pass:"admin"};
    usuarios.push(usuario);

    usuario = {nombre:"Juan", apellido1:"Gonzalez", apellido2:"Ruiz", nick:"Juan33", pass:"123"};
    usuarios.push(usuario);

    usuario = {nombre:"Pedro", apellido1:"Rodriguez", apellido2:"Sanz", nick:"PedroRS", pass:"123"};
    usuarios.push(usuario);

    usuario = {nombre:"Antonio", apellido1:"Mejía", apellido2:"Pastor", nick:"AntonioMej", pass:"123"};
    usuarios.push(usuario);

    localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

     */

    //Al iniciar cargo los datos de del storage en el array de usuarios (De ésta manera evitamos que sean eliminados)

    //Si no hay nada en el array usuarios cargo los elementos del storage.
    if(usuarios.length == 0){

        storageInfo = JSON.parse(localStorage.getItem("datosUsuarios"));

        let cantidadUsuarios = 0;
        let storage;

        if(storageInfo == null){//Si storageInfor está a NUll significa que la aplicación se ha abierto por primera vez.
            cantidadUsuarios = 0;
        }else{
            cantidadUsuarios = storageInfo.length
        }




        for (let i = 0; i < cantidadUsuarios; i++) {//En caso de que haya algo de info en el storage, lo cargo en el array usuarios
            let usuario = {nombre:storageInfo[i].nombre, apellido1:storageInfo[i].apellido1, apellido2:storageInfo[i].apellido2, nick:storageInfo[i].nick, pass:storageInfo[i].pass};
            usuarios.push(usuario);
        }


        if(usuarios.length == 0){//Si sigue siendo null significa que no existe ningún dato en el storage y por lo tanto añado al usuario admin por seguridad.
            console.log("Admin")
            let usuario = {nombre:"admin", apellido1:"none", apellido2:"none", nick:"admin", pass:"admin"};
            usuarios.push(usuario);
        }


        //Tras extraer los datos locales actualizo la información.
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

    }



}




//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function iniciarSesion(){

    iniciarBD();

    for (let i = 0; i < usuarios.length; i++) {
        //Aquí añadiremos los campos a rellenar a la hora de la visualización de los elementos.
        console.log(usuarios[i].nick)
        if(usuarios[i].nick == document.getElementById("txNick").value && usuarios[i].pass == document.getElementById("txPass").value){
            history.pushState('data to be passed', 'Title of the page', 'http://localhost:63342/Equipo04-Reto01/html/paginaprincipal/index.html');

        }
    }

}

function crearUsuario(){
    let nombreLocal = document.getElementById("txNombre").value;
    let apellido1Local = document.getElementById("txApellido1").value;
    let apellido2Local = document.getElementById("txApellido2").value;
    let nickLocal = document.getElementById("txNick2").value;
    let passLocal = document.getElementById("txPass2").value;


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

    //usuarios = JSON.parse(localStorage.getItem("datosUsuarios"));

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