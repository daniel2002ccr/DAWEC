
function darFoco() {
    var cajaNombre = document.getElementById("nombre");
        cajaNombre.focus();
}

function quitarFoco() {
    var cajaNombre = document.getElementById("nombre");
        cajaNombre.blur();
}

function anadirh2(){
    let primerParrafo = document.querySelector("#seccionTercera p");
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "“Lorem Ipsum de nuevo”.";
    let seccionTercera = document.querySelector("#seccionTercera");
    seccionTercera.insertBefore(nuevoH2, primerParrafo);
}

function cambiarParrafo(){
    let parrafo = document.querySelector("#seccionPrimera");
    let tercerParrafo = parrafo.lastElementChild;
    let primerParrafo = document.querySelector("#seccionTercera");
    
    let clon = tercerParrafo.cloneNode(true);

    primerParrafo.insertBefore(clon, primerParrafo.firstChild);
    clon.removeAttribute("onclick");

}

function nuevoDiv(){
    let nuevoDiv = document.createElement("div");
    let divAClonar = document.getElementById("seccionLista");
    let divClonado = divAClonar.cloneNode(true);
    
    nuevoDiv.appendChild(divClonado);
    document.body.appendChild(nuevoDiv);
    nuevoDiv.id = "seccionListaClonada";
}

function borrarLista(){
    let listaClonada = document.querySelector("#seccionListaClonada ul");
    listaClonada.lastElementChild.remove();
}

function desaparecerParrafos(){
    var segundoParrafo = document.querySelector("#seccionPrimera p:nth-child(2)");
    var quintoParrafo = document.querySelector("#seccionTercera p:nth-child(2)");
    console.log(segundoParrafo, quintoParrafo);

        segundoParrafo.remove();
        quintoParrafo.remove();
    
    var inputsTexto = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputsTexto.length; i++) {
        var tamano = parseInt(inputsTexto[i].getAttribute("size")) || 20;
        inputsTexto[i].setAttribute("size", tamano + 5);
    }
}

function quitarNombre(){
    let inputsSexo = document.querySelectorAll('input[name="sexo"]');
    inputsSexo.forEach(function(input){
        input.removeAttribute("name");
    })

    // al borrar el name los dos botones si los pulsas ambos se activan y no se intercalan el uno con el otro.
}

function ponerNombre(){
    var inputsSexo = document.querySelectorAll('input[type="radio"]');
    inputsSexo.forEach(function(input){
        input.setAttribute("name", "genero");
    })
}
function asignarEstiloAParrafos(){

    let parrafos = document.querySelectorAll('p');
    for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].classList.add("parrafosNormal");
    }
}


function asignarOtros(){
    let parrafos = document.querySelectorAll('p');
    let par = document.getElementsByClassName("par");
    console.log(par);

    for (var i = 0; i < parrafos.length; i++) {
    
        if((i+1) % 3 === 0){
            parrafos[i].classList.remove("parrafosNormal");
            parrafos[i].classList.add("parrafosEspecial");
        }
    }
    for (var i = 0; i < par.length; i++) {
        par[i].classList.add("parNuevo");
    }
}