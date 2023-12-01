function array() {

  const array = [];


  while (true) {

    const introduceUsuario = prompt("Introduzca un número y un nombre de persona por favor : ");

    const introduceNum = parseFloat(introduceUsuario);
    if (isNaN(introduceNum)) {
      break;
    }

    const introduceNombre = prompt("Introduzca un nombre: ");

    const aceptaUsuario = confirm(`¿Quieres añadir ${introduceNum} en la posición indicada?`);

    if (aceptaUsuario) {
      if (introduceNum >= 0) {

        array[introduceNum] = introduceNombre;
      } else {

        array.push(introduceNombre);
      }
    } else {
      if (introduceNum >= 0) {

        delete array[introduceNum];
      } else {

        array.shift();
      }
    }
  }


  console.log("Contenido final del array:", array);
}
array();

function arraySonia() {
  let array = [];

  do {
    let numero = Number(prompt("Introduzca un número"));

    if (isNaN(numero)) {
      break;
    }
    let nombre = prompt("Introduzca un nombre");
    let anadir = prompt("Desea añadir este nombre en el array");

    if (anadir) {
      if (numero >= 0) {
        array[numero] = nombre;
      } else {
        array.push(nombre);
      }
      console.log(array);
    }
    else {
      if (numero >= 0) {
        array[numero] = "";
      }
      else {
        array.shift();
      }
      console.log(array);
    }
  } while (true);

  console.log(array);
}
arraySonia();
