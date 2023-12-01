

function calcularMultiplicacion(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    

    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0){
        alert('Introduzca un numero positivo por favor');
        document.getElementById('resultado').value = '';

        return;
    }

    const resultado = numero1 * numero2;

    document.getElementById('resultado').value = resultado;
}

function calcularDivision(){
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);


    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 <= 0){
        alert('Introduzca un numero positivo por favor');
        document.getElementById('resultado').value = '';

        return;
    }

    const resultado = numero1 / numero2;

    document.getElementById('resultado').value = resultado;
}