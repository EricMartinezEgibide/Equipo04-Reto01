let usuarios = [];
let avisos = [];


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

            //Una vez los credenciales son correctos abro la nueva página.
            history.pushState('data to be passed', 'Title of the page', 'http://localhost:63342/Equipo04-Reto01/html/paginaprincipal/home.html');

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

function registrarUsuario(){
    iniciarBD();

    //Primero obtenemos los datos introducidos en el formulario.
    let nombreLocal = document.getElementById("name").value;
    let apellido1Local = document.getElementById("surname1").value;
    let apellido2Local = document.getElementById("surname2").value;
    let passLocal = document.getElementById("pass").value;

    //Luego generamos un nick uniendo sus iniciales y la fecha actual.
    let nickLocal = nombreLocal.charAt(0) + apellido1Local.charAt(0) + fechaActualSimple();

    //Compruebo de que el usuario ha rellenado todos los campos.
    if(nombreLocal == "" || apellido1Local == "" || apellido2Local == "" || passLocal == ""){
        alert("Tiene que rellenar todos los campos.")
    }else{

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
    }


}

function crearUsuario() {//PARA TESTEOS

    //ES LO MISMO QUE LA FUNCIÓN "REGISTRAR USUARIO" SOLO QUE PARA PRUEBAS INTERNAS Y SIN GENERACIÓN DE NICK.
    iniciarBD();

    let nombreLocal = document.getElementById("txNombre").value;
    let apellido1Local = document.getElementById("txApellido1").value;
    let apellido2Local = document.getElementById("txApellido2").value;
    let nickLocal = document.getElementById("txNick2").value;
    let passLocal = document.getElementById("txPass2").value;

    if(nombreLocal == "" || apellido1Local == "" || apellido2Local == "" || passLocal == "" || nickLocal == ""){
        alert("Tiene que rellenar todos los campos.")
    }else{
        let usuario = {
            nombre: nombreLocal,
            apellido1: apellido1Local,
            apellido2: apellido2Local,
            nick: nickLocal,
            pass: passLocal
        };

        usuarios.push(usuario);
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));
    }

}

function borrarUsuario() {

    iniciarBD();

    //Creo un boolean para saber si se ha encontrado un usuario con ese nick o no.
    let encontrado = false;

    //Recojo el nick introducido por el usuario.
    usuarioAEliminar = document.getElementById("nickname").value;

    //Busco en el array una coincidencia con el nick y cuando lo localizo lo elimino mediante la función ".splice".
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nick == usuarioAEliminar) {
            usuarios.splice(i, 1);
            encontrado = true;
        }
    }

    //Si "encontrado" sigue con el valor con el que fué instanciado significa que el usuario no existe.
    if(encontrado == false){
        alert("El usuario que desea eliminar no existe.")
    }

    //Por último cargo la nueva colección de datos en "datosUsuarios" reemplazando los actuales.
    localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));

}

function modificarUsuario() {

    iniciarBD()

    //Creo las variables para poder referenciarlas fuera del for.
    let nick;
    let nombre;
    let apellido1;
    let apellido2;
    let pass;

    //Busco el objeto en localstorage y guardo los datos nuevos en variables.
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nick == document.getElementById("nickname").value) {

            //Aunque no tenemos una base de datos SQL, he utilizado la variable nick como PK
            //Es por ello que no almaceno el nick introducido en el formulario.
            nick = usuarios[i].nick;

            //El resto de parámetros en cambio sí que son leídos y almacenados.
            nombre = document.getElementById("name").value
            apellido1 = document.getElementById("surname1").value
            apellido2 = document.getElementById("surname2").value
            pass = document.getElementById("pass").value

            //Borro el registro viejo para poderlo sustituir.
            usuarios.splice(i, 1);
        }
    }

    //Creo un nuevo usuario con los nuevos datos.
    let usuario = {
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nick: nick,
        pass: pass
    };

    console.log(usuario.nick)

    //Por último añado al nuevo usuario a localstorage (Siempre y cuando existiese.)
    if (usuario.nick != null) {
        usuarios.push(usuario);
        localStorage.setItem('datosUsuarios', JSON.stringify(usuarios));
    }else{
        //Si el valor del nick es null, significaría que no existe ningún usuario con el nick introducido en el formulario.
        //alert("El usuario que está intentando modificar no existe.")

        //NUEVO Ésto se debe a que la nueva interfaz de usuario utiliza en mismo botón para editar y para crear.
        crearUsuario();

    }


}

function leerUsuarios() {

    iniciarBD();

    usuariosTabla = {};

    for (let i = 0; i < usuarios.length; i++) {
        //Creo un nuevo array de usuarios con la nomenclatura que han definido en la tabla.
        let usuario = {nombre: usuarios[i].nombre, apellido1: usuarios[i].apellido1, apellido2: usuarios[i].apellido2, nick: usuarios[i].nick, pass: usuarios[i].pass};
        usuariosTabla.push(usuario);


        console.log(usuarios[i].nick)
    }

    return usuariosTabla;

}

function rellenarCamposUsuario(idBoton) {

    iniciarBD();

    let id = obtenerIdBoton(idBoton)
    //Creo un boolean para saber si se ha encontrado un usuario con ese nick o no.


            //Símplemente relleno los datos del formulario con los que hay en el objeto que coincida con el nick.
            document.getElementById("nickname").value = usuarios[id].nick;
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
    } else if (document.getElementById("rbAlta").checked){
        prioridadLocal = 2;
    }

    //Compruebo de que el usuario ha rellenado todos los campos.
    if(tituloLocal == "" || descripcionLocal == "" || prioridadLocal == -1){
        alert("Tiene que rellenar todos los campos.")
    }else{
        let fechaLocal = fechaActualCompleja();

        //Por último procedo a la creación de un nuevo aviso y a guardarlo en el localStorage.
        let aviso = {
            titulo: tituloLocal,
            descripcion: descripcionLocal,
            prioridad: prioridadLocal,
            fecha: fechaLocal};

        avisos.push(aviso);

        localStorage.setItem('datosAvisos', JSON.stringify(avisos));
    }


}

function borrarAviso() {
    iniciarBD();

    //Creo un boolean para saber si se ha encontrado un aviso con ese nick o no.
    let encontrado = false;

    //Recojo el titulo introducido por el usuario.
    avisoABorrar = document.getElementById("txTitulo2").value;

    //Busco en el array una coincidencia con el titulo y cuando lo localizo lo elimino mediante la función ".splice".
    for (let i = 0; i < avisos.length; i++) {
        if (avisos[i].titulo == avisoABorrar) {
            avisos.splice(i, 1);
            encontrado = true;
        }
    }

    //Si "encontrado" sigue con el valor con el que fué instanciado significa que el aviso no existe.
    if(encontrado == false){
        alert("El aviso que intenta eliminar no existe.")
    }

    localStorage.setItem('datosAvisos', JSON.stringify(avisos));
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

    //Creo las variables para poder referenciarlas fuera del for.
    let titulo;
    let descripcion;
    let prioridad;
    let fecha;

    //Busco el objeto en localstorage y guardo los datos nuevos en variables.
    for (let i = 0; i < avisos.length; i++) {
        if (avisos[i].titulo == document.getElementById("txTitulo2").value) {

            //Al igual que el "nick" del usuario, el "título" es la PK de los elementos "avisos".
            titulo = avisos[i].titulo;
            descripcion = document.getElementById("txDescripcion2").value;

            //Una vez mas comprobamos qué radio button está activado.
            if (document.getElementById("rbBaja").checked) {
                prioridad = 0;
            } else if (document.getElementById("rbNormal").checked) {
                prioridad = 1;
            } else {
                prioridad = 2;
            }

            //La fecha de creación no la modificamos para evitar cualquier tipo de adulterio.
            fecha = avisos[i].fecha;

            //Borro el registro viejo para poderlo sustituir.
            avisos.splice(i, 1);
        }
    }

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
    }else{
        alert("El aviso que está intentando modificar no existe.")
    }

}

function rellenarCamposAviso() {

    iniciarBD();

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
    }

    //Si "encontrado" sigue con el valor con el que fué instanciado significa que el usuario no existe.
    if(encontrado == false){
        alert("El aviso que intenta buscar no existe.")
    }

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
function fechaActualSimple(){
    var fecha = new Date();
    var fecha = fecha.getDate() + ""
        + (fecha.getMonth() + 1) + ""
        + fecha.getFullYear() + "";

    return fecha;
}

//GENERADORES DE INTERFAZ
function generarInterfazUsuario(){
    iniciarBD();

    let divGeneral = "";


    for (let i = 0; i < usuarios.length; i++) {
        let divLocal = "";

        divLocal += "<div>";//Abrimos div



            //AÑADO LOS CAMPOS
            divLocal += "<p>"
            divLocal += usuarios[i].nick
            divLocal += "</p>"
            divLocal += usuarios[i].nombre
            divLocal += "</p>"
            divLocal += usuarios[i].apellido1
            divLocal += "</p>"
            divLocal += usuarios[i].apellido2
            divLocal += "</p>"

            //BOTONES CON SU ID
            divLocal += '<button id="btModificar'
            divLocal += i
            divLocal += '" onclick = "rellenarCamposUsuario(this.id)">Modificar usuario</button>'

            divLocal += '<button id="btEliminar'
            divLocal += i
            divLocal += '" onclick = "borrarUsuario(this.id)">Borrar usuario</button>'



            //Cierro el div.
            divLocal += "</div>";

            //Concateno el resultado.
            divGeneral += divLocal;
    }


        console.log(divGeneral)

    //ENVIAR EL divGeneral
        avisoABorrar = document.getElementById("containt_divs").insertAdjacentHTML("beforeend",divGeneral);

    /*


                <div>
					<p>Nick</p>
					<p>Pedro</p>
					<p>Gutierrez</p>
					<p>Perez</p>
					<button id="btModificar1" onclick = "modificarUsuario()">Modificar usuario</button>
					<button id="btEliminar1" onclick = "eliminar()">Eliminar usuario</button>
				</div>





    <html>
	<head>
		<title>prueba</title>
	</head>
	<body>
		<form>
			<div id="contenedor">

				<div>
					<p>Pedro / Lopez / Alonso / pla241194 / 456789 &nbsp;
					<input type="button" name="modificar" value="modificar" id="bt2_modificar"/>
					&nbsp;
					<input type="button" name="eliminar" value="eliminar" id="bt2_eliminar"/></p>
				</div>
				<div>
					<p>Pedro / Lopez / Alonso / pla241194 / 456789 &nbsp;
					<input type="button" name="modificar" value="modificar" id="bt2_modificar"/>
					&nbsp;
					<input type="button" name="eliminar" value="eliminar" id="bt2_eliminar"/></p>
				</div>
				<div>
					<p>Pedro / Lopez / Alonso / pla241194 / 456789 &nbsp;
					<input type="button" name="modificar" value="modificar" id="bt2_modificar"/>
					&nbsp;
					<input type="button" name="eliminar" value="eliminar" id="bt2_eliminar"/></p>
				</div>
				<div>
					<p>Pedro / Lopez / Alonso / pla241194 / 456789 &nbsp;
					<input type="button" name="modificar" value="modificar" id="bt2_modificar"/>
					&nbsp;
					<input type="button" name="eliminar" value="eliminar" id="bt2_eliminar"/></p>
				</div>
				<div>
					<p>Pedro / Lopez / Alonso / pla241194 / 456789 &nbsp;
					<input type="button" name="modificar" value="modificar" id="bt2_modificar"/>
					&nbsp;
					<input type="button" name="eliminar" value="eliminar" id="bt2_eliminar"/></p>
				</div>
				<div>
					<p>Pedro / Lopez / Alonso / pla241194 / 456789 &nbsp;
					<input type="button" name="modificar" value="modificar" id="bt2_modificar"/>
					&nbsp;
					<input type="button" name="eliminar" value="eliminar" id="bt2_eliminar"/></p>
				</div>
			</div>
		</form>
	</body>
</html>
     */




}
function generarInterfazAvisos() {
    iniciarBD();

    let divGeneral = "";


    for (let i = 0; i < avisos.length; i++) {
        let divLocal = "";

        divLocal += "<div>";//Abrimos div



        //AÑADO LOS CAMPOS
        divLocal += "<p>"
        divLocal += avisos[i].titulo
        divLocal += "</p>"
        divLocal += avisos[i].descripcion
        divLocal += "</p>"
        divLocal += avisos[i].prioridad
        divLocal += "</p>"

        //BOTONES CON SU ID
        divLocal += '<button id="btModificar'
        divLocal += i
        divLocal += '" onclick = "rellenarCamposUsuario(this.id)">Modificar usuario</button>'

        divLocal += '<button id="btEliminar'
        divLocal += i
        divLocal += '" onclick = "borrarUsuario(this.id)">Borrar usuario</button>'



        //Cierro el div.
        divLocal += "</div>";

        //Concateno el resultado.
        divGeneral += divLocal;
    }


    console.log(divGeneral)

    //ENVIAR EL divGeneral
    avisoABorrar = document.getElementById("containt_divs").insertAdjacentHTML("beforeend",divGeneral);
}

//Urko utilizar también
function obtenerIdBoton(idBoton){

    let ultimoCaracter = idBoton.replace('btModificar', '');
    let intId = parseInt(ultimoCaracter)
    return intId;
}