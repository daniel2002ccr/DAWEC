function random(){

    var x = Math.random()*100;
    var y = Math.random()*100;
    var z = Math.random()*100;
    console.log(x);
    console.log(y);
    console.log(z);


    if (x > y && y > z){
        alert(x);
    } else if (x < y && x > z){
        alert(y);
    } else{
        alert(z);
    }
  
}
random();