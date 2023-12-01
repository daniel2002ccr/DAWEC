
function darFoco() {
    var cajaNombre = document.getElementById("nombre");
        cajaNombre.focus();
}

function quitarFoco() {
    var cajaNombre = document.getElementById("nombre");
        cajaNombre.blur();
}

function anadirh2(){
    let seccionTercera = document.getElementById("seccionTercera");
    let primerParrafo = seccionTercera.firstElementChild;
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "“Lorem Ipsum de nuevo”.";
    seccionTercera.insertBefore(nuevoH2, primerParrafo);
    
}

function cambiarParrafo(){
    let seccionPrimera = document.getElementById("seccionPrimera");
 
    let tercerParrafo = seccionPrimera.lastElementChild;

    let seccionTercera = document.getElementById("seccionTercera");

    let primerParrafo = seccionTercera.firstElementChild;
    console.log(primerParrafo);

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