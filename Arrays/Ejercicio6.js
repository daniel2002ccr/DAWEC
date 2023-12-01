function ejercicio6(notas) {
    return notas.filter(nota => nota >= 5);
  }
  
  const notas = [8, 4, 6, 7, 3, 9, 2, 5, 7, 8, 6, 4, 6, 9, 10];
  const aprobados = obtenerAprobados(notas);
  
  console.log("Notas originales:", notas);
  console.log("Aprobados:", aprobados);

  function buscarPosicionNota(notas, valorNota) {
    return notas.indexOf(valorNota);
  }
  
  const posicion5_5 = buscarPosicionNota(notas, 5.5);
  
  console.log("Posición de la nota 5.5:", posicion5_5);


  function todosAprobados(){
    return notas.every(nota => nota >= 5);
  }

  
  