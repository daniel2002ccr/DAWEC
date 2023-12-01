function buscarAnimal() {
    let tipo = document.getElementById("animal").value;
    fetch("http://localhost:3000/animales?Tipo=" + tipo)
    .then(response => response.json())
    .then(datosAnimales => mostrarAnimales(datosAnimales))
    .catch(error => console.error(error));

}

function mostrarAnimales(datosAnimales) {

    if (datosAnimales.length > 0) {
        let resultadoHTML = '<h2>Animales encontrados:</h2>' +
            '<ul>' +
            datosAnimales.map(datosAnimales => '<li>Nombre: ' + datosAnimales.Nombre + ', Rasgos: ' + datosAnimales.Rasgos + '</li>').join('') +
            '</ul>';
        document.getElementById('resultado').innerHTML = resultadoHTML;
    } else {
        document.getElementById('resultado').innerHTML = 'No se encontraron animales de ese tipo.';
    }
}

function buscarAnimales(){
    fetch("http://localhost:3000/animales")
    .then(response => response.json())
    .then(datosAnimales => mostrarAnimales(datosAnimales))
    .catch(error => console.error(error));
}

function crearAnimal(){
    let URL = "http://localhost:3000/animales";
    let nuevoAnimal = {
        Tipo: "Gato",
    Nombre: "Guantes",
    Observacion: "Mi gato se llama guantes",
    Ubicacion: "Yo me llamo Ralph",
    Rasgos: "Pato, pato, pato, pato, pato"
    }
    let init = {
        method: 'POST',
        body: JSON.stringify(nuevoAnimal),
        headers: { 'Content-Type': 'application/json' }
}
fetch(URL, init)
.then(response => response.json())
.then(datosRespuesta => console.log(datosRespuesta))
.catch(err => console.error(err));
}
