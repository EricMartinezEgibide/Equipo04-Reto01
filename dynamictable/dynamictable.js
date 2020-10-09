function funcMain(){
    document.getElementById("add_row").addEventListener('click', newRowTable);
    document.getElementsByTagName("loans_table").addEventListener('click', ".fa-edit",deleteUser());
    document.getElementsByTagName('loans_table').addEventListener('click', ".fa-trash",editUser());
    document.getElementsByTagName("body").addEventListener('click', ".fa-edit", deleteUser());
    document.getElementsByTagName("body").addEventListener('click', "fa-trash", editUser());
}
/*function funcDeleteUser(){
    //Obtener la fila que se esta eliminando
    var a = this.parentNode.parentNode;
    this.parent.parent.removeEventListener(this);
    console.log(a);
}*/
function deleteUser(){
    //Guardar la referencia del objeto presionado
    var _this = this;
    //Obtener las filas de los datos de la fila que se va a eliminar
    var array_fila = getRowSelected(_this);
    //this.parentElement.parentElement.fadeOut();
    this.parent.parent.removeEventListener(this);
}
function editUser(){
    var _this = this;
    var array_fila = getRowSelected(_this);
    console.log(array_fila[0] + " - " + array_fila[1] + " - " + array_fila[2] + " - " + array_fila[3] + " - " + array_fila[4]);
    //Codigo de editar una fila lo pueden agregar aqui
}
function getRowSelected(objectPressed){
    //Coger la linea que se esta eliminando
    var a = objectPressed.parentNode.parentNode;
    var name = a.getElementByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
    var sn1 = a.getElementByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
    var sn2 = a.getElementByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
    var nick = a.getElementByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
    var pass = a.getElementByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;

    var array_fila = [name, sn1, sn2, nick, pass];
    return array_fila;
}
function newRowTable(){
    //Columnas
    var name = document.getElementById("name").value;
    var sn1 = document.getElementById("surname1").value;
    var sn2 = document.getElementById("surname2").value;
    var nick = document.getElementById("nick").value;
    var pass = document.getElementById("pass").value;

    //Tabla
    var tusers = document.getElementById("tableusers");
    var row = tusers.insertRow(0 + 1);
    //Número de celdas = Número de <td> introducido en HTML
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    var cel4 = row.insertCell(3);
    var cel5 = row.insertCell(4);
    var cel6 = row.insertCell(5);

    //Lo que vamos a tener en cada celda
    cel1.innerHTML = '<p name="userName_f[]" class="non-margin">'+name+'</p>';
    cel2.innerHTML = '<p name="surname1_f[]" class="non-margin">'+sn1+'</p>';
    cel3.innerHTML = '<p name="surname2_f[]" class="non-margin">'+sn2+'</p>';
    cel4.innerHTML = '<p name="nick_f[]" class="non-margin">'+nick+'</p>';
    cel5.innerHTML = '<p name="pass_f[]" class="non-margin">'+pass+'</p>';
    cel6.innerHTML = '<span class="icon fas fa-edit"></span><span class="icon fas fa-trash"></span>';
}
