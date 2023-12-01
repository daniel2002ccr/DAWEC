function notas() {


    let notas = prompt("introduzca números separados por comas");
    let totalNotas = 0;
    let notasArr = notas.split(",").map(Number);




    let tamanoArray = notasArr.length;
    console.log(notasArr);

    for (let i = 0; i < notasArr.length; i++) {
        totalNotas += notasArr[i];
    }
    let notaMedia = totalNotas / tamanoArray;

    notaMedia.toFixed(1);

    console.log(totalNotas);
    console.log(notaMedia);


}
notas();

function valorAlCubo() {

    let numero = Number(prompt("Introduzca un número"));

    if (!isNaN(numero)) {
        let valorAlCubo = numero * numero * numero;
        console.log(valorAlCubo);

    } else {
        alert("Debe de introducir un número, no introduzca ninguna cadena de texto o deje vacio");
        console.log(false);
    }
}

valorAlCubo();

function cadena() {
    let texto = ["Hola Mundo", "Adios Mundo", "Hola", "Adios", "Rojo", "Verde"];

    let textoMinusculas = texto.map(palabra => palabra.toLowerCase());

    console.log(textoMinusculas);

    let palabrasPosicionPar = [];

    for (let i = 0; i < textoMinusculas.length; i += 2) {
        palabrasPosicionPar.push(textoMinusculas[i]);
    }

    console.log(palabrasPosicionPar);
}

cadena();


