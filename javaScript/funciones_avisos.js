function insertar() {
    document.getElementById('insertar_avisos').style.display="block";
    document.getElementById('modificar_avisos').style.display="none";
    document.getElementById('eliminar_avisos').style.display="none";
    document.getElementById('ver_avisos').style.display="none";
}

function modificar() {
    document.getElementById('insertar_avisos').style.display="none";
    document.getElementById('modificar_avisos').style.display="block";
    document.getElementById('eliminar_avisos').style.display="none";
    document.getElementById('ver_avisos').style.display="none";
}

function eliminar() {
    document.getElementById('insertar_avisos').style.display="none";
    document.getElementById('modificar_avisos').style.display="none";
    document.getElementById('eliminar_avisos').style.display="block";
    document.getElementById('ver_avisos').style.display="none";
}

function crearAviso() {
    alert("¡Has creado el aviso!");
}

function eliminarAviso() {
    alert("¡Has eliminado el aviso!");
}

function modificarAviso() {
    alert("¡Has modificado el aviso!");
}

function verAvisos() {
    document.getElementById('insertar_avisos').style.display="none";
    document.getElementById('modificar_avisos').style.display="none";
    document.getElementById('eliminar_avisos').style.display="none";
    document.getElementById('ver_avisos').style.display="block";
}