window.onload = function () {
    let formulario = document.getElementById('Formulario1');
    let telefono = formulario.firstElementChild;
    formulario.addEventListener('submit', comprobarFormulario.bind(formulario));
    telefono.addEventListener('keydown', comprobarTeclas);
}

function comprobarFormulario(event) {
    event.preventDefault();
    let valorInput = this.firstElementChild.value;
    let aviso = "";

    if (valorInput = "") {
        aviso += "No has introducido un telefono.\n";
    }
    let radioBut = document.querySelector('input[type="radio"]:checked');
    if (radioBut == null) {
        aviso += "No has seleccionado un prepago o no. \n";
    }
    let selectOpt = document.getElementsByTagName('select')[0].selectedIndex;
    if (selectOpt == -1) {
        aviso += "No has seleccionado una compañia. \n";
    }

    let valorArea = document.getElementById('observaciones').value;
    if (valorArea == "") {
        aviso += "No has introducido ningun texto \n";
    }


    alert(aviso);
}
function comprobarTeclas(event){
    event.preventDefault();{
    let permitidos = "0123456789";
    
}
}
