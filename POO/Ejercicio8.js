function fecha() {
    var dia = 31;
    var mes = 7;
    var año = 2002;
    var fecha1 = new Date(año, mes, dia);
    var fecha2 = new Date(2002, 7, 31);
    var fechaActual = new Date();

    console.log(fecha1);
    console.log(fecha2);

    var diferencia = fechaActual - fecha1;

    var dias = Math.floor((diferencia) / (1000 * 60 * 60 * 24));

    alert(fecha1.getDay());

    fecha2.setFullYear(2023);
    console.log(fecha2);

    alert(fecha2.getDay());

    console.log(dias);

}
fecha();

function nochevieja() {
    var fechaNochevieja = new Date(2022, 11, 31, 21, 30, 15);
    console.log(fechaNochevieja.getDate());

    let fecha = fechaNochevieja.getDate();


    console.log(fechaNochevieja.setDate(fecha + 1));

    console.log(fechaNochevieja.toISOString());

    /*Al sumarle uno con setDate a fecha, primero lo imprimirá en milisegundos, para poder comprobar que sí se ha conseguido el cambio de la fecha, usaremos el metodo 
    toISOString o cualquier otro el cual muestre el año, mes, dia y la hora, por ejemplo con el que he mencionado nos daria de resultado esto:
    2023-01-01T20:30:15.000Z
    
    El hecho de que aquí parezca que se ha restado uno a la hora puede llegar a ser a la zona horaria que tenga este metodo.*/

}
nochevieja();

function fechaActual() {

    let fechaActual = new Date();



    console.log(fechaActual.toLocaleString());
    console.log(fechaActual.toISOString());
    console.log(fechaActual.toString());
    console.log(fechaActual.toUTCString());
    console.log(fechaActual.toTimeString());


    /*  
    Distintas formas de sacar una fecha actual
 
 let fechaActual2 = Date.now();
 let hoy = new Date(fechaActual2);


 var dia = 24;
 var mes = 9;
 var año = 2023;
 var hora = 12;
 var minutos = 23;
 let fechaActual3 = new Date(año, mes, dia, hora, minutos);


 var fechaActual4 = new Date(2023, 9, 24, 12, 25);

 var fechaActual5 = new Date('2023-10-24 12:27'); 
 
 
 */
}
fechaActual();

function mayorFecha() {
    var fechaNacimiento = new Date(2002, 7, 31);

    console.log(fechaNacimiento);

    var fecha1 = new Date(2023, 0, 1, 0, 0, 0);

    console.log(fecha1);

    if (fechaNacimiento > fecha1) {
        console.log("Tu fecha de nacimiento es mayor");
    } else {
        console.log("La fecha del 1 de enero es mayor");
    }
}
mayorFecha();

function DiaMes(anio, mes) {

    const fechaSiguienteMes = new Date(anio, mes, 1); // Se pilla el primer dia del siguiente mes para después poder restarle 1.
    console.log(fechaSiguienteMes.toString());
    fechaSiguienteMes.setDate(fechaSiguienteMes.getDate() - 1); // nos dará el último día y lo meteremos en una variable.


    const ultimoDia = fechaSiguienteMes.getDate();

    return ultimoDia;

}
// Comprobación.

const anio = 2023;
const mes = 2;
const diasEnFebrero = DiaMes(anio, mes);
console.log(`El mes ${mes} del año ${anio} tiene ${diasEnFebrero} días.`);

function comparaFechas(){

    var fecha = new Date();
    var fecha2 = new Date(2023, 5, 20);

    if (fecha < fecha2){
        alert("La primera fecha es menor de la otra fecha");
    } else if (fecha > fecha2){
        alert("La primera fecha es mayor de la otra fecha");
    } else {
        alert("las fechas son iguales.");
    }
}
comparaFechas();