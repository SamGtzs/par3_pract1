

let nombre = "Samuel";
let $nombre = document.querySelector("#nombre");

$nombre.innerHTML = nombre;

let $btnLight = document.querySelector("#btn-light");
let $btnDark = document.querySelector("#btn-dark");

$btnLight.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "teal";
});

$btnDark.addEventListener("click", (e) => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

//Repaso de AJAX y JSON
async function obtenerDatos() {
  let respuesta = await fetch("js/data.json");
  let datos = await respuesta.json();

  let $info = document.querySelector("#info");

  $info.innerHTML = `
    <table border="1">
      <tr>
        <td>Nombre:</td>
        <td>${datos.nombre}</td>
      </tr>
      <tr>
        <td>Edad:</td>
        <td>${datos.edad}</td>
      </tr>
      <tr>
        <td>Correo:</td>
        <td>${datos.contacto.correo}</td>
      </tr>
      <tr>
        <td>Movil:</td>
        <td>${datos.contacto.movil}</td>
      </tr>
    </table>
  `;

  console.log(datos);
}

obtenerDatos();

async function obtenerDatosGitHub() {
  let respuesta = await fetch("https://api.github.com/users/SamGtzs");
  let datos = await respuesta.json();

  let $github = document.querySelector("#github");

  $github.innerHTML = `
    <table border="1">
      <tr>
        <td>Nombre:</td>
        <td>${datos.name}</td>
      </tr>
      <tr>
        <td>Avatar:</td>
        <td><img src="${datos.avatar_url}" alt="${datos.name}"></td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>${datos.email}</td>
      </tr>
      <tr>
        <td>Location:</td>
        <td>${datos.location}</td>
      </tr>
    </table>
  `;

  console.log(datos);
}

obtenerDatosGitHub();
