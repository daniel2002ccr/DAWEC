function buscarPatrones(texto) {
    const patrones = ["34", "101", "ES", "HO"];
    const resultados = {};

    // Convertir el texto a minúsculas para que no haya distinción entre mayúsculas y minúsculas
    const textoMinusculas = texto.toLowerCase();

    patrones.forEach((patron) => {
        let contador = 0;
        let indice = textoMinusculas.indexOf(patron);

        while (indice !== -1) {
            contador++;
            indice = textoMinusculas.indexOf(patron, indice + 1);
        }

        resultados[patron] = contador;
    });

    // Mostrar el resultado en un mensaje de alerta
    let mensaje = "Resultados de la búsqueda de patrones:\n";
    for (const patron in resultados) {
        mensaje += `${patron}: ${resultados[patron]} palabras\n`;
    }
    alert(mensaje);
}
