function buscarIr(){
    let elementosClase = document.getElementsByClassName("titularNoticia");
    console.log(elementosClase);
    let array = Array.from(elementosClase);
    console.log(array);

    array.forEach((elemento,i,array) => {
        console.log("posicion " + i);
        console.log(elemento);
        let contenido = elemento.innerHTML;
        console.log(contenido);
        let tieneIr = contenido.includes("tr");
        console.log(tieneIr)
        if (!tieneIr){
            alert(contenido);
        }
    });
}