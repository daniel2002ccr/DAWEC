function ejercicioMedia() {
    const notas = [8, 7, 6, 9, 5, 10, 8, 7, 6, 9, 5, 10, 8, 7, 6];

    const suma = notas.reduce((total, nota) => total + nota, 0);
    const media = suma / notas.length;

    console.log("Notas:", notas);
    console.log("Media de la clase:", media);
}

function ejercicioMasAlta() {
    const notas = [8, 7, 6, 9, 5, 10, 8, 7, 6, 9, 5, 10, 8, 7, 6];

    const notaMasAlta = notas.reduce((maxNota, nota) => Math.max(maxNota, nota), -Infinity);

    console.log("Notas:", notas);
    console.log("Nota más alta:", notaMasAlta);

}

function ejercicioGastoTotal() {
    const precios = [10.5, 15.2, 8.7, 12.3, 5.0, 9.8, 7.2, 6.0, 11.4, 13.6, 10.0, 8.9];

    const gastoTotal = precios.reduce((total, precio) => total + precio, 0);

    console.log("Precios:", precios);
    console.log("Gasto total:", gastoTotal);

}

function ejercicioIva(){
    const preciosSinIVA = [10.5, 15.2, 8.7, 12.3, 5.0, 9.8, 7.2, 6.0, 11.4, 13.6, 10.0, 8.9];

    const preciosConIVA = preciosSinIVA.map(precio => precio * 1.10);
    
    console.log("Precios sin IVA:", preciosSinIVA);
    console.log("Precios con IVA (10%):", preciosConIVA);
    
}


function ejercicio9(){
    let notas = [8, 7, 6, 9, 5, 10, 8, 2, 6, 9, 3, 10, 8, 7, 6];
    let precios = [10.5, 15.2, 8.7, 12.3, 5.0, 9.8, 7.2, 6.0, 11.4, 13.6, 10.0, 8.9];

    let copiaNotas = notas;
    copiaNotas[2] = 4;

    let copiaPrecios = precios.slice();

    copiaPrecios[3] = 120.4;
    copiaPrecios[0] = 1.0;

    console.log(copiaNotas);
    console.log(copiaPrecios);
}