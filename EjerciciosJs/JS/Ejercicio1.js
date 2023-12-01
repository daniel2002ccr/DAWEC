alert("Hola Mundo 2!!");

function mostrarVariables(){
    alert('Variable 1: ' + variable1);
    
    var variable2 = null;
    var variable1 = 34;

    alert('Variable 1: ' + variable1);

    variable3 = 15.9;

    alert('Multiplicacion ' + variable1 * variable3);

    var variable3 = "ahora soy un texto ";

    alert(variable3 + 35);
}

function comprobarOperadores(){

    var var1 = 'Hola Mundo';
    var var2 = 'Adiós Mundo';

    alert("Primera comprobación " + (var1==var2)
          + " Segunda comprobación " + (var1 != var2)
          + " Tercera comprobación " + (var1 < var2)
          + " Cuarta comprobación " + (var1 > var2)
          + " Quinta comprobación " + (var1 <= var2)
          + " Sexta comprobación " + (var1 >= var2));

    
    var var3 = 4;
    var var4 = 'cuatro';

    alert("Primera comprobación de " + (var3 == var4)
    + " Segunda comprobación de " + (var3 === var4));

    var var5 = 5;
    var var6 = 6;
    var var7 = 7;

    alert("Primera comprobación de " + (var5<var6)
    + " Segunda comprobación de " + (var6<var7)
    + " Tercera comprobación de " + (var5<=var6)
    + " Cuarta comprobación de " + (var6>var7));

    var7 = !true;

    alert ("Ahora la variable 7 es " + var7);
}