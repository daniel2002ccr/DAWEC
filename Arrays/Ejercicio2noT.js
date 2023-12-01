function ejercicio2(){

    let palabra1 = prompt("Introduzca una palabra");

    let palabra2 = prompt("Introduzca otra palabra");

    if (palabra1.length > palabra2.length){
        alert("La primera palabra es más grande");
    }
    else if(palabra1 < palabra2) {
        alert("La primera palabra es mas corta");
    }
    else{
        alert("Ambas palabras tienen la misma cantidad de letras");
    }
}
ejercicio2();