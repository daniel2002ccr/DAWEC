function ejercicio1() {
    fetch("https://jsonplaceholder.typicode.com/users/1") //devuelve una promesa
        .then(response => response.json()) //El método json() devuelve otra promesa
        .then(datosUsuario => console.log(datosUsuario)) //then() de la segunda promesa
        .catch(error => console.error(error));
}

function mostrarTabla(){
    fetch("https://jsonplaceholder.typicode.com/users") //devuelve una promesa
        .then(response => response.json()) //El método json() devuelve otra promesa
        .then(datosUsuario => verCorreosUsuarios(datosUsuario)) //then() de la segunda promesa
        
}

function verCorreosUsuarios(datosUsuario){
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    datosUsuario.forEach((user) => {
    const newUser = document.createElement("tr");
    newUser.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>`;
    tbody.appendChild( newUser);
  });
}
