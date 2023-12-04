let datosReserva = {};

function nuevoCalendario() {
    let deporte = document.getElementById('deporte').value;

    if (!deporte) {
        mostrarAviso('Debes introducir un deporte por favor.');
        return;
    }

    const mesAñoActual = obtenerMesAñoActual();
    const reservasExistentes = datosReserva[mesAñoActual] && datosReserva[mesAñoActual][deporte] ? datosReserva[mesAñoActual][deporte] : [];


    if (!datosReserva[mesAñoActual]) {
        datosReserva[mesAñoActual] = {};
    }
    datosReserva[mesAñoActual][deporte] = reservasExistentes;

    
    generarCalendario();
    mostrarDiasLibres();
}


function obtenerMesAñoActual() {
    let fechaActual = new Date();
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const mesActual = meses[fechaActual.getMonth()];
    const añoActual = fechaActual.getFullYear();
    return `${mesActual}//${añoActual}`;
}

function mostrarAviso(mensaje) {
    const divAvisos = document.getElementById('divAvisos');
    const aviso = document.createElement('p');
    aviso.textContent = mensaje;
    divAvisos.appendChild(aviso);
    setTimeout(function () {
        divAvisos.removeChild(aviso);
    }, 3000);
}

function generarCalendario() {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const añoActual = fechaActual.getFullYear();

    const diasEnMes = new Date(añoActual, mesActual + 1, 0).getDate();
    const primerDiaSemana = new Date(añoActual, mesActual, 1).getDay();

    const diasSemana = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

    const divMes = document.getElementById('divMes');
    divMes.innerHTML = '';

    const encabezado = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const th = document.createElement('th');
        th.textContent = diasSemana[i];
        encabezado.appendChild(th);
    }
    divMes.appendChild(encabezado);

    let contadorDia = 1;
    for (let i = 0; i < 6; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const celda = document.createElement('td');
            if (i === 0 && j < primerDiaSemana) {

                celda.textContent = '';
            } else if (contadorDia > diasEnMes) {

                celda.textContent = '';
            } else {

                celda.textContent = contadorDia;

                if (j === 0 || j === 6) {
                    celda.classList.add('fondoViolet');
                    celda.setAttribute('disabled', 'true');
                }

                contadorDia++;
            }
            fila.appendChild(celda);
        }
        divMes.appendChild(fila);
    }
}
function contarDiasLibres() {
    let casillas = document.querySelectorAll('#divMes td');
    let diasDisponibles = 0;

    casillas.forEach(casilla => {
        if (casilla.textContent.trim() !== '' && !casilla.classList.contains('reservada') && !casilla.classList.contains('fondoViolet')) {
            diasDisponibles++;
        }
    });

    
    return diasDisponibles;
}

function mostrarDiasLibres() {
    const divAvisos = document.getElementById('divAvisos');

    setInterval(function () {
        const diasLibres = contarDiasLibres();
        const mensaje = `Quedan ${diasLibres} días libres`;
        divAvisos.innerHTML = `<p>${mensaje}</p>`;
    }, 3000);

    if(diasLibres == 0) {
        alert('Ya no quedan más días disponibles');
    }
}

function asignarReserva(casilla){

    let deporte = document.getElementById('deporte').value;
    


}

