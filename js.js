function pedirColor(){
    let colores = [];
    let contador = 0;
    
    while (true){
        let color = prompt("Escriba un color");

        if (color === "red"){
            break;
        }
        else if (color === "green"){
            continue;
        } 

        if (!colores.includes(color)) {
            colores.push(color);
          }
      
          contador++;
        }
        console.log("Número de colores introducidos: " + contador);
        console.log("Colores almacenados: " + colores.join(", "));
}

pedirColor();