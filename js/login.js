const formulario = document.getElementById("form");
const username = document.getElementById("id");
const pass = document.getElementById("pass");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let users = (
        {
            usuario: username.value,
            contraseña: pass.value
        }
    );
    localStorage.setItem("users", JSON.stringify(users));

    if (JSON.parse(localStorage.getItem("users")).usuario == "admin" && JSON.parse(localStorage.getItem("users")).contraseña == "1234")
        location.href = "juego.html"
    else {
        alert("Usuario y contraseña invalidos")
    }
});






