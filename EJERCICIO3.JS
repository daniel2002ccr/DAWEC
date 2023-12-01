function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function calcularPrimos(numeroLimite) {
    if (isNaN(numeroLimite) || numeroLimite <= 0 || numeroLimite >= 100) {
      console.log('Por favor, introduce un número válido menor que 100.');
      return [];
    }
  
    const primos = [];
  
    for (let i = 1; i <= numeroLimite; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }
  
  const numeroLimite = parseInt(prompt('Introduce un número (menor que 100):'));
  
  const numerosPrimos = calcularPrimos(numeroLimite);
  
  console.log(`Números primos entre 1 y ${numeroLimite}: ${numerosPrimos.join(', ')}`);
  