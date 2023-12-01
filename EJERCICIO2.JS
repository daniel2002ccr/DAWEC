function convertirEurosADolares(euros) {
  const tasaCambio = 1.06; // Tasa de cambio aproximada
  return euros * tasaCambio;
}

function convertirDolaresAEuros(dolares) {
  const tasaCambio = 0.94; // Tasa de cambio aproximada
  return dolares / tasaCambio;
}

function mostrarResultado() {
  const cantidad = parseFloat(prompt('Introduce la cantidad:'));

  if (isNaN(cantidad)) {
    console.log('Por favor, introduce una cantidad válida.');
    return;
  }

  const opcion = prompt('¿Quieres convertir a Dólares (D) o a Euros (E)?');

  if (opcion.toUpperCase() === 'D') {
    const resultado = convertirEurosADolares(cantidad);
    console.log(`Resultado en Dólares: $${resultado.toFixed(2)}`);
  } else if (opcion.toUpperCase() === 'E') {
    const resultado = convertirDolaresAEuros(cantidad);
    console.log(`Resultado en Euros: €${resultado.toFixed(2)}`);
  } else {
    console.log('Opción no válida. Por favor, introduce D o E.');
  }
}

mostrarResultado();