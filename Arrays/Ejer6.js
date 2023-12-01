function ejercicio6(){
    let numero = prompt("Introduzca números separados por $");

    let array = numero.split("$");

    let array2 = [];
    for (let i = 0; i<array.length; i++){
       if (i === array.length - 1){ 
        array2.push(array[i] + array[0]);
    } else{
        array2.push(array[i] + array[i + 1]);
    }
    }
    console.log(array2)
}
ejercicio6();