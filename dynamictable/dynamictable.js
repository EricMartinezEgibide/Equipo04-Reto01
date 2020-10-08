function funcMain(){
    document.getElementById("add_row").addEventListener("click", newRowTable);

}
function newRowTable(){
    /*Columnas*/
    var name = document.getElementById("name").value;
    var sn1 = document.getElementById("surname1").value;
    var sn2 = document.getElementById("surname2").value;
    var nick = document.getElementById("nick").value;
    var pass = document.getElementById("pass").value;

    /*Tabla*/
    var tusers = document.getElementById("tableusers");
    var row = tusers.insertRow(0 + 1);
    /*Número de celdas = Número de <td> introducido en HTML*/
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    var cel4 = row.insertCell(3);
    var cel5 = row.insertCell(4);
    var cel6 = row.insertCell(5);
    var cel7 = row.insertCell(6);

    /*Lo que vamos a tener en cada celda*/
    cel1.innerHTML = '<p name="userName_f[]" class="non-margin">'+name+'</p>';
    cel2.innerHTML = '<p name="surname1_f[]" class="non-margin">'+sn1+'</p>';
    cel3.innerHTML = '<p name="surname2_f[]" class="non-margin">'+sn2+'</p>';
    cel4.innerHTML = '<p name="nick_f[]" class="non-margin">'+nick+'</p>';
    cel5.innerHTML = '<p name="pass_f[]" class="non-margin">'+pass+'</p>';
    cel6.innerHTML = '<span class="icon fas fa-edit"></span><span class="icon fas fa-trash"></span>';
}