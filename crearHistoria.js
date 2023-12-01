function crearHistoria(){

    let personaje = document.getElementById("personaje").value;
    let adjetivo = document.getElementById("adjetivo").value;
    let ciudad = document.getElementById("ciudad").value;
    let transporte = document.getElementById("transporte").value;
    let aficion = document.getElementById("aficion").value;
    let momentoDiaElemento= document.querySelector("input[name = 'hora']:checked").value;


    let momentoDia = "";
    if (momentoDiaElemento != null){
        momentoDia = momentoDiaElemento.value;

        let historia = personaje + " que es muy " + adjetivo + " y vive en " + ciudad + " y va al trabajo en " + transporte + " y le gusta el " + momentoDia;

        let divHistoria = document.getElementById("divHistoria");
        divHistoria.innerHTML = historia;
    } else{
        alert("Tienes que seleccionar amanecer o atardecer");
    }

   
}