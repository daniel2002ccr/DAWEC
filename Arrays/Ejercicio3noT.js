function ejercicio3(){

    let numero = prompt("Introduce tres números separados por &");

    let arrayNum = numero.split("&");

    if ((arrayNum[0] == arrayNum[1]) && (arrayNum[1] == arrayNum[2]) && (arrayNum[0] == arrayNum[2])){

        console.log("Son iguales");
    
    }else if ((arrayNum[0] == arrayNum[1]) || (arrayNum[1] == arrayNum[2]) || (arrayNum[0] == arrayNum[2])){

        console.log("Dos son iguales");
    
    } else{
        console.log("Son diferentes todos");
    }
    
}