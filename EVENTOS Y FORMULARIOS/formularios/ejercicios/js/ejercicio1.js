// Ejercicio 1
let id = null;

function mostrarAviso() {
    id = setInterval(function () {
        alert('Este sábado a las 3 son las 2');
    }, 5000);
}

function detenerAviso() {

    if (id !== null) {
        clearInterval(id);
        id = null;
    }
}
window.onload = function () {
    document.getElementById('aviso').addEventListener('click', mostrarAviso);
    document.getElementById('pararAviso').addEventListener('click', detenerAviso);

// Ejercicio 2
let dni = document.getElementById('dni');
document.addEventListener('keydown', function (event) {
    let letra = event.key.toLowerCase();

    if (letra.match(/[a-z]/i)) {
        let dnisConLetra = obtenerDNI(letra);
        mostrarInfoTecla(letra, dnisConLetra);
    } else {
        limpiarInfoTecla();
    }

});

document.addEventListener('dblclick', function (event) {

    cambiarColorFondo();
});
}

function obtenerDNI(letra) {
    let letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let dnis = [];
        for (let i = 0; i <= 9999; i++) {
            let dniConLetra = i.toString() + letrasDNI.charAt(i % 23);
            if (dniConLetra.slice(-1) === letra.toUpperCase()) {
                dnis.push(dniConLetra);
            }
        }
        return dnis;

}
function mostrarInfoTecla(letra, dnis) {
    dni.innerText = `La tecla presionada es: ${letra.toUpperCase()}.\n`;
    dni.innerText += `DNIs de 4 cifras que contienen la letra "${letra.toUpperCase()}":\n${dnis.join(', ')}`;
}

function limpiarInfoTecla() {
    dni.textContent = ''; 
}
//Ejercicio 3
function cambiarColorFondo() {
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    
    let color = `rgb(${red}, ${green}, ${blue})`;

    
    document.body.style.backgroundColor = color;
}

