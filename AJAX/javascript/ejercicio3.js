function mostrarTabla(){
    fetch("https://jsonplaceholder.typicode.com/todos") 
        .then(response => response.json()) 
        .then(datosUsuario => console.log(datosUsuario)) 
        
}

function mostrarTarea() {
    fetch("https://jsonplaceholder.typicode.com/todos/55") 
        .then(response => response.json()) 
        .then(datosUsuario => console.log(datosUsuario)) 
        .catch(error => console.error(error));
}
function tareaQueNoExiste() {
    fetch("https://jsonplaceholder.typicode.com/todos/201") 
        .then(response => {
            if(response.ok){
                return response;
            } else{
                alert("No existe la tarea solicitada")
            }
        })
}

function crearPeticion() {
    let URL = "https://jsonplaceholder.typicode.com/todos";
    let nuevoUser = {
        userID: 5,
        title: "Prueba de POST",
        completed: false,
    };
    let init = {
        method: 'POST',
        body: JSON.stringify(nuevoUser),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(URL, init)
        .then(response => response.json())
        .then(datosRespuesta => alert(datosRespuesta.id))
        .catch(err => console.error(err));
}
function modificarPeticion(){
    let URL = "https://jsonplaceholder.typicode.com/todos/76";
    let actualizaUser = {
        title: "Tarea modificada",
        completed: true,
    };
    let init = {
        method: 'PUT',
        body: JSON.stringify(actualizaUser),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(URL, init)
        .then(response => response.json())
        .then(datosRespuesta => console.log(datosRespuesta))
        .catch(err => console.error(err));
}
function borrarPeticion(){
    let URL = "https://jsonplaceholder.typicode.com/todos/32";
    let init = {
        method: 'DELETE',
    };
    fetch(URL, init)
        .then(response => response.json())
        .then(datosRespuesta => console.log(datosRespuesta))
        .catch(err => console.error(err));
}
