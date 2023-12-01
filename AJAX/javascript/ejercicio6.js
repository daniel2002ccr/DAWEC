function crearCliente(){
    let URL = ""
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dni = document.getElementById("dni").value;
    let fechaNac = document.getElementById("fechaNac").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let preferencias = Array.from(document.querySelectorAll('input[name="preferencias"]:checked')).map(p => p.value).join("_");
    let valores = { 
        nombreCliente: nombre,
        apellidosCliente: apellidos,
        dniCliente: dni,
        fechaCliente: fechaNac,
        sexoCliente: sexo,
        preferenciasCliente: preferencias
    }
   
}
let init = {
    method: 'POST',
    body: JSON.stringify(valores),
    headers: { 'Content-Type': 'application/json' }
}
fetch(URL, init)
.then(response => response.json())
.then(datosRespuesta => console.log(datosRespuesta))
.catch(err => console.error(err));
