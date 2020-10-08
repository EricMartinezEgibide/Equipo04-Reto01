function insertar() {
    document.getElementById('insertar_usuarios').style.display="block";
    document.getElementById('modificar_usuarios').style.display="none";
    document.getElementById('eliminar_usuarios').style.display="none";
    document.getElementById('ver_usuarios').style.display="none";
}

function modificar() {
    document.getElementById('insertar_usuarios').style.display="none";
    document.getElementById('modificar_usuarios').style.display="block";
    document.getElementById('eliminar_usuarios').style.display="none";
    document.getElementById('ver_usuarios').style.display="none";
}

function eliminar() {
    document.getElementById('insertar_usuarios').style.display="none";
    document.getElementById('modificar_usuarios').style.display="none";
    document.getElementById('eliminar_usuarios').style.display="block";
    document.getElementById('ver_usuarios').style.display="none";
}

function grabarUsuario() {
    alert("¡Has creado el usuario!");
}

function eliminarUsuario() {
    alert("¡Has eliminado el usuario!");
}

function modificarUsuario() {
    alert("¡Has modificado el usuario!");
}

function verUsuarios() {
    document.getElementById('insertar_usuarios').style.display="none";
    document.getElementById('modificar_usuarios').style.display="none";
    document.getElementById('eliminar_usuarios').style.display="none";
    document.getElementById('ver_usuarios').style.display="block";
}