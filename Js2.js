function fibonacciRecursivo(n){
    if (n <=  1){
        return n;
    }
    return fibonacciRecursivo(n-1) + fibonacciRecursivo(n-2);
}

function calcularSecuenciafibonacciRecursivo(){
    let limite = parseInt(prompt("Introduzca el limite"));

    for (let i = 0; i<=limite; i++){
       console.log(fibonacciRecursivo(i));
    }
}
calcularSecuenciafibonacciRecursivo();







function fibonacciSinRecursividad(){
    let limite = parseInt(prompt("Introduce el límite"));
    let nums = [0, 1];

    for (let i = 2; i <= limite; i++) {
        nums[i] = nums[i - 1] + nums[i - 2];
      }
    
      for (let i = 0; i <= limite; i++) {
        console.log(nums[i]);
      }
}