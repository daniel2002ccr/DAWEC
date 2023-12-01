function pedirNumero() {
    const numero = parseInt(prompt("Introduzca un numero"));
  
  if (isNaN(numero)){
    alert("Por favor ingrese un número");
  }
  if (numero >0){
    alert("Es positivo el número");
  }
  else if (numero <0){
    alert("Es negativo el número");
  
  }
  else{
    alert("Es nulo");
  }
  }
  
  pedirNumero();