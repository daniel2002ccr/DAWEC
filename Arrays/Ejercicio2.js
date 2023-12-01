function pedirNumero() {

    let numero = prompt("Introduzca valores numéricos separados por /");
    let array = numero.split("/");

    console.log(array);

    array.sort(function(elem1,elem2){
        return elem1 - elem2;
    });

    console.log(array);
    console.log(array.join("-"));

}
pedirNumero();