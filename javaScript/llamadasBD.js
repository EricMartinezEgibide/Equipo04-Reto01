let usuarios = [];
let avisos = [];
let idLocal = "";


//CONSULTAS PELIGROSAS

function iniciarBD() {//Work in progress

    //USUARIOS

    //Al iniciar cargo los datos de del storage en el array de usuarios (De ésta manera evitamos que sean eliminados)

    //Si no hay nada en el array usuarios cargo los elementos del storage.
    if (usuarios.length == 0) {

        storageInfo = JSON.parse(localStorage.getItem("datosUsuarios"));

        let cantidadUsuarios = 0;
        let storage;

        if (storageInfo == null) {//Si storageInfo está a NUll significa que la aplicación se ha abierto por primera vez.
            cantidadUsuarios = 0;
        } else {
            cantidadUsuarios = storageInfo.length
        }


        for (let i = 0; i < cantidadUsuarios; i++) {//En caso de que haya algo de info en el storage, lo cargo en el array usuarios
            let usuario = {
                nombre: storageInfo[i].nombre,
                apellido1: storageInfo[i].apellido1,
                apellido2: storageInfo[i].apellido2,
                nick: storageInfo[i].nick,
                pass: storageInfo[i].pass
            };
            usuarios.push(usuario);
        }


        if (usuarios.length == 0) {//Si sigue siendo null significa que no existe ningún dato en el storage y por lo tanto añado al usuario admin por seguridad.
            console.log("Admin")
            let usuario = {nombre: "admin", apellido1: "none", apellido2: "none", nick: "admin", pass: "admin"};
            usuarios.push(usuario);
        }


        //Tras extraer los datos locales actualizo la información.
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

    }

    //LO MISMO PERO CON AVISOS

    if (avisos.length == 0) {

        storageInfo = JSON.parse(localStorage.getItem("datosAvisos"));

        let cantidadAvisos = 0;
        let storage;

        if (storageInfo == null) {//Si storageInfo está a NUll significa que la aplicación se ha abierto por primera vez.
            cantidadAvisos = 0;
        } else {
            cantidadAvisos = storageInfo.length
        }


        for (let i = 0; i < cantidadAvisos; i++) {//En caso de que haya algo de info en el storage, lo cargo en el array avisos.
            let aviso = {
                titulo: storageInfo[i].titulo,
                descripcion: storageInfo[i].descripcion,
                prioridad: storageInfo[i].prioridad,
                fecha: storageInfo[i].fecha
            };
            avisos.push(aviso);
        }


        //Tras extraer los datos locales actualizo la información.
        localStorage.setItem('datosAvisos', JSON.stringify(avisos));

    }


}


//FUNCIONES USUARIOS Atributos: nombre, apellido1, apellido2, nick, pass

function iniciarSesion() {

    //Ésta función se ejecutará en casi todas las consultas de la app, sirve para que los arrays con datos locales estén actualizados.
    iniciarBD();

    //Recorro el array en busca de una coincidencia entre nick y contraseña.
    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].nick == document.getElementById("txNick").value && usuarios[i].pass == document.getElementById("txPass").value) {

            
            //ESTO ES UN ERROR IMPOSIBLE DE ARREGLAR
            //history.pushState('', 'Home', 'paginaprincipal/home.html');


            //Alternativa al error.
            window.open("paginaprincipal/home.html");



            //EXTRA!!!!!

            //A partir de aquí comienza la persistencia de datos. (Para poder saber quién ha iniciado sesión.)

            //Guardo los datos de usuario.
            let usuario = {
                nombre: usuarios[i].nombre,
                apellido1: usuarios[i].apellido1,
                apellido2: usuarios[i].apellido2,
                nick: usuarios[i].nick,
                pass: usuarios[i].pass
            };

            //Y los meto en una nueva Key del localstorage llamada UsuarioActual.
            //(De ésta manera luego podremos saber qué usuario está realizando los cambios.)
            localStorage.setItem('usuarioActual', JSON.stringify(usuario));


        }
    }


}

function registrarUsuario() {
    iniciarBD();


    //Primero obtenemos los datos introducidos en el formulario.
    let nombreLocal = document.getElementById("name").value;
    let apellido1Local = document.getElementById("surname1").value;
    let apellido2Local = document.getElementById("surname2").value;
    let passLocal = document.getElementById("pass").value;

    //Luego generamos un nick uniendo sus iniciales y la fecha actual.
    let nickLocal = nombreLocal.charAt(0) + apellido1Local.charAt(0) + fechaActualSimple();

    //Compruebo de que el usuario ha rellenado todos los campos.
    if (nombreLocal == "" || apellido1Local == "" || apellido2Local == "" || passLocal == "") {
        alert("Tiene que rellenar todos los campos.")
    } else {

        //Por último procedo a la creación de un nuevo usuario y a guardarlo en el localStorage.
        let usuario = {
            nombre: nombreLocal,
            apellido1: apellido1Local,
            apellido2: apellido2Local,
            nick: nickLocal,
            pass: passLocal
        };


        usuarios.push(usuario);
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));
        alert("El usuario ha sido registrado correctamente.")
        location.reload();
    }


}

function crearUsuario() {//PARA TESTEOS

    //ES LO MISMO QUE LA FUNCIÓN "REGISTRAR USUARIO" SOLO QUE PARA PRUEBAS INTERNAS Y SIN GENERACIÓN DE NICK.
    iniciarBD();

    let nombreLocal = document.getElementById("name").value;
    let apellido1Local = document.getElementById("surname1").value;
    let apellido2Local = document.getElementById("surname2").value;
    let nickLocal = document.getElementById("nick").value;
    let passLocal = document.getElementById("pass").value;

    if (nombreLocal == "" || apellido1Local == "" || apellido2Local == "" || passLocal == "" || nickLocal == "") {
        alert("Tiene que rellenar todos los campos.")
    } else {
        let usuario = {
            nombre: nombreLocal,
            apellido1: apellido1Local,
            apellido2: apellido2Local,
            nick: nickLocal,
            pass: passLocal
        };

        usuarios.push(usuario);
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));
        alert("Nuevo usuario añadido correctamente.")
        location.reload();
    }

}//SOLO PARA DEBUG

function borrarUsuario(idBoton) {

    iniciarBD();

    //Transformo la id del botón en su número identificativo
    let id = obtenerIdBotonEliminar(idBoton);

    //Borro el campo del array
    usuarios.splice(id, 1);

    //Por último cargo la nueva colección de datos en "datosUsuarios" reemplazando los actuales.
    localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

    alert("Usuario eliminado correctamente.")
    location.reload();
}

function modificarUsuario() {

    iniciarBD()

    if (idLocal == "") {
        registrarUsuario();

    } else {
        //Transformo la id del botón en su número identificativo
        let id = obtenerIdBotonModificar(idLocal);

        //Aunque no tenemos una base de datos SQL, he utilizado la variable nick como PK
        //Es por ello que no almaceno el nick introducido en el formulario.
        let nick = usuarios[id].nick;

        //El resto de parámetros en cambio sí que son leídos y almacenados.
        let nombre = document.getElementById("name").value
        let apellido1 = document.getElementById("surname1").value
        let apellido2 = document.getElementById("surname2").value
        let pass = document.getElementById("pass").value

        //Borro el registro viejo para poderlo sustituir.
        usuarios.splice(id, 1);

        //Creo un nuevo usuario con los nuevos datos.
        let usuario = {
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            nick: nick,
            pass: pass
        };


        //Por último añado al nuevo usuario a localstorage (Siempre y cuando existiese.)
        if (usuario.nick != null) {
            usuarios.push(usuario);
            localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));
            alert("Usuario modificado correctamente.")
            location.reload()
        } else {
            //Si el valor del nick es null, significaría que no existe ningún usuario con el nick introducido en el formulario.
            //alert("El usuario que está intentando modificar no existe.")
            alert("El usuario que está intentando modificar no existe. Por lo que se creará el usuario.")

        }
    }


}

function leerUsuarios() {

    iniciarBD();

    usuariosTabla = {};

    for (let i = 0; i < usuarios.length; i++) {
        //Creo un nuevo array de usuarios con la nomenclatura que han definido en la tabla.
        let usuario = {
            nombre: usuarios[i].nombre,
            apellido1: usuarios[i].apellido1,
            apellido2: usuarios[i].apellido2,
            nick: usuarios[i].nick,
            pass: usuarios[i].pass
        };
        usuariosTabla.push(usuario);


        console.log(usuarios[i].nick)
    }

    return usuariosTabla;

}

function rellenarCamposUsuario(idBoton) {
    iniciarBD();

    //Almacenamos la id para futuros usos.
    idLocal = idBoton;

    let id = obtenerIdBotonModificar(idBoton)
    //Creo un boolean para saber si se ha encontrado un usuario con ese nick o no.


    //Símplemente relleno los datos del formulario con los que hay en el objeto que coincida con el nick.

    document.getElementById("name").value = usuarios[id].nombre;
    document.getElementById("surname1").value = usuarios[id].apellido1;
    document.getElementById("surname2").value = usuarios[id].apellido2;
    document.getElementById("pass").value = usuarios[id].pass;


}

//FUNCIONES AVISOS Atributos: titulo, descripcion, fecha, prioridad

function crearAviso() {
    iniciarBD();

    //Primero obtenemos los datos introducidos en el formulario.
    let tituloLocal = document.getElementById("txTitulo2").value;
    let descripcionLocal = document.getElementById("txDescripcion2").value;
    let prioridadLocal = -1;

    //Seleccionamos el valor de prioridad comprobando cual de los "radio buttons" está activado.
    if (document.getElementById("rbBaja").checked) {
        prioridadLocal = 0;
    } else if (document.getElementById("rbNormal").checked) {
        prioridadLocal = 1;
    } else if (document.getElementById("rbAlta").checked) {
        prioridadLocal = 2;
    }

    //Compruebo de que el usuario ha rellenado todos los campos.
    if (tituloLocal == "" || descripcionLocal == "" || prioridadLocal == -1) {
        alert("Tiene que rellenar todos los campos.")
    } else {
        let fechaLocal = fechaActualCompleja();

        //Por último procedo a la creación de un nuevo aviso y a guardarlo en el localStorage.
        let aviso = {
            titulo: tituloLocal,
            descripcion: descripcionLocal,
            prioridad: prioridadLocal,
            fecha: fechaLocal
        };

        avisos.push(aviso);

        localStorage.setItem('datosAvisos', JSON.stringify(avisos));
        alert("Aviso creado correctamente")
        location.reload();
    }


}

function borrarAviso(idBoton) {
    iniciarBD();

    //Tratamos la id
    id = obtenerIdBotonEliminar(idBoton);

    //Elimino el aviso del array local
    avisos.splice(id, 1);

    //Actualizo los datos en el storage
    localStorage.setItem('datosAvisos', JSON.stringify(avisos));
    location.reload();
    alert("Aviso borrado correctamente")

}

function leerAvisos() {
    iniciarBD()

    //Creo un string donde concatenar todos los avisos.
    textoAvisos = "";

    //Creo un nuevo array para poder ordenar los avisos en base a su prioridad y no modificar el orden del array principal.
    avisosOrdenados = avisos;

    //Mediante una función flecha ordenao los elementos según su prioridad.
    avisosOrdenados.sort((a, b) => a.prioridad - b.prioridad);

    for (let i = 0; i < avisosOrdenados.length; i++) {
        //Aquí añadiremos los campos a rellenar a la hora de la visualización de los elementos.

        //Por el momento tan solo lo añado al String, pero ésta sería la localización para rellenar la tabla con los datos.
        textoAvisos += ("Titulo: " + avisosOrdenados[i].titulo + " | Descripción: " + avisosOrdenados[i].descripcion + " | Fecha: " + avisosOrdenados[i].fecha + "\n")
    }

    //Imprimo el resultado almacenado en el string.
    document.getElementById("taAvisos").value = textoAvisos;
}

function modificarAviso() {

    iniciarBD()

    if (idLocal == "") {
        crearAviso();
    } else {

        let id = obtenerIdBotonModificar(idLocal);

        //Creo las variables para poder referenciarlas fuera del for.
        let prioridad;
        let fecha;


        let titulo = document.getElementById("txTitulo2").value;
        let descripcion = document.getElementById("txDescripcion2").value;

        //Una vez mas comprobamos qué radio button está activado.
        if (document.getElementById("rbBaja").checked) {
            prioridad = 0;
        } else if (document.getElementById("rbNormal").checked) {
            prioridad = 1;
        } else {
            prioridad = 2;
        }

        //La fecha de creación no la modificamos para evitar cualquier tipo de adulterio.
        fecha = avisos[id].fecha;

        //Borro el registro viejo para poderlo sustituir.
        avisos.splice(id, 1);


        //Creo un nuevo aviso con los datos introducidos por el usuario.
        let aviso = {
            titulo: titulo,
            descripcion: descripcion,
            prioridad: prioridad,
            fecha: fecha
        };

        //Por último añado el nuevo aviso a localstorage (Siempre y cuando existiese.)
        if (aviso.titulo != null) {
            avisos.push(aviso);
            localStorage.setItem('datosAvisos', JSON.stringify(avisos));
            location.reload();
            alert("Aviso modificado correctamente.")
        } else {
            alert("El aviso que está intentando modificar no existe. Por lo que se creará el aviso.")
            crearAviso();
        }
    }



}

function rellenarCamposAviso(idBoton) {

    iniciarBD();
    idLocal = idBoton;

    let id = obtenerIdBotonModificar(idBoton)

    document.getElementById("txTitulo2").value = avisos[id].titulo;
    document.getElementById("txDescripcion2").value = avisos[id].descripcion;

    //Lo único un poco peculiar aquí es éste switch que se encarga de marcar el Radio button correcto.
    switch (avisos[id].prioridad) {

        case 0:
            document.getElementById("rbBaja").checked = true;
            break;

        case 1:
            document.getElementById("rbNormal").checked = true;
            break;

        case 2:
            document.getElementById("rbAlta").checked = true;
            break;

    }
    /*
    //Creo un boolean para saber si se ha encontrado un usuario con ese nick o no.
encontrado = false;

//Primero busco el aviso en el local storage en base al título introducido por el usuario.
for (let i = 0; i < avisos.length; i++) {

    if (avisos[i].titulo == document.getElementById("txTitulo2").value) {//Una vez localizado añado los datos en los campos.
        document.getElementById("txTitulo2").value = avisos[i].titulo;
        document.getElementById("txDescripcion2").value = avisos[i].descripcion;

        //Lo único un poco peculiar aquí es éste switch que se encarga de marcar el Radio button correcto.
        switch (avisos[i].prioridad){

            case 0:
                document.getElementById("rbBaja").checked = true;
                break;

            case 1:
                document.getElementById("rbNormal").checked = true;
                break;

            case 2:
                document.getElementById("rbAlta").checked = true;
                break;

        }

        encontrado = true;

    }
    //Si "encontrado" sigue con el valor con el que fué instanciado significa que el usuario no existe.
if(encontrado == false){
    alert("El aviso que intenta buscar no existe.")
}
     */
}


//EXTRAS

//Éstas dos funciones crean un String con al fecha de hoy. La única diferencia es;

//"fechaActualCompleja: Guarda la fecha de una manera mas legible y decorada."
function fechaActualCompleja() {

    var fecha = new Date();
    var fecha = fecha.getDate() + "/"
        + (fecha.getMonth() + 1) + "/"
        + fecha.getFullYear() + " @ "
        + fecha.getHours() + ":"
        + fecha.getMinutes() + ":"
        + fecha.getSeconds();

    return fecha;
}

//"fechaActualSimple: Guarda la fecha como una concatenación de números."
function fechaActualSimple() {
    var fecha = new Date();
    var fecha = fecha.getDate() + ""
        + (fecha.getMonth() + 1) + ""
        + fecha.getFullYear() + "";

    return fecha;
}

//GENERADORES DE INTERFAZ
function generarInterfazUsuario() {
    iniciarBD();

    let divGeneral = "";


    for (let i = 0; i < usuarios.length; i++) {
        let divLocal = "";

        divLocal += "<div>";//Abrimos div


        //AÑADO LOS CAMPOS
        divLocal += "<p>" + usuarios[i].nick + "</p><p>" + usuarios[i].nombre + "</p><p>" + usuarios[i].apellido1 + "</p><p>" + usuarios[i].apellido2 + "</p>"


        //BOTONES CON SU ID
        divLocal += '<button id="btModificar' + i + '" onclick = "rellenarCamposUsuario(this.id)"><i class="fas fa-user-edit"></i></button>'

        divLocal += '<button id="btEliminar' + i + '" onclick = "borrarUsuario(this.id)"><i class="fas fa-user-times"></i></button>'


        //Cierro el div.
        divLocal += "</div>";

        //Concateno el resultado.
        divGeneral += divLocal;
    }


    console.log(divGeneral)

    //ENVIAR EL divGeneral
    document.getElementById("containt_divs").insertAdjacentHTML("beforeend", divGeneral);

}

function generarInterfazAvisos() {
    iniciarBD();

    let divGeneral = "";


    for (let i = 0; i < avisos.length; i++) {
        let divLocal = "";

        divLocal += "<div>";//Abrimos div

        //Creo un nuevo array para poder ordenar los avisos en base a su prioridad y no modificar el orden del array principal.
        avisosOrdenados = avisos;

        //Mediante una función flecha ordeno los elementos según su prioridad.
        avisosOrdenados.sort((a, b) => b.prioridad - a.prioridad);


        //AÑADO LOS CAMPOS
        divLocal += "<p>"
        divLocal += avisosOrdenados[i].titulo
        divLocal += "</p><p>"
        divLocal += avisosOrdenados[i].descripcion
        divLocal += "</p><p>"

        switch (avisosOrdenados[i].prioridad){
            case 0:
                divLocal += "Baja"
                break;
            case 1:
                divLocal += "Normal"
                break;
            case 2:
                divLocal += "Alta"
                break;
        }

        divLocal += "</p><p>"
        divLocal += avisosOrdenados[i].fecha
        divLocal += "</p>"

        //BOTONES CON SU ID
        divLocal += '<button id="btModificar'
        divLocal += i
        divLocal += '" onclick = "rellenarCamposAviso(this.id)"><i class="fas fa-user-edit"></i></button>'

        divLocal += '<button id="btEliminar'
        divLocal += i
        divLocal += '" onclick = "borrarAviso(this.id)"><i class="fas fa-user-times"></i></button>'


        //Cierro el div.
        divLocal += "</div>";

        //Concateno el resultado.
        divGeneral += divLocal;
    }


    console.log(divGeneral)

    //ENVIAR EL divGeneral
    avisoABorrar = document.getElementById("containt_divs").insertAdjacentHTML("beforeend", divGeneral);
}


//Obtener la posición de los arrays en base a su ID
function obtenerIdBotonEliminar(idBoton) {

    let ultimoCaracter = idBoton.replace('btEliminar', '');
    let intId = parseInt(ultimoCaracter)
    return intId;
}

function obtenerIdBotonModificar(idBoton) {
    let ultimoCaracter = idBoton.replace('btModificar', '');
    let intId = parseInt(ultimoCaracter)
    return intId;
}