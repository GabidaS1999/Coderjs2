
let mensajes = [];

const nuevoUsuario = document.getElementById("registerFormUser");



const imprimirMensaje = () => {
 if (mensajes.length !== 0) {
    console.log(mensajes)
    alert (mensajes)
 }
}
nuevoUsuario.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("emailUsuario").value.trim();
    let nombre = document.getElementById("nombreUsuario").value.trim();
    let repetirNombre = document.getElementById("repetirNombreUsuario").value.trim();
    let contrasena = document.getElementById("contrasena1").value.trim();
    let repetirContrasena = document.getElementById("contrasena2").value.trim();


    if (registrarUsuario(
        email,
        nombre,
        repetirNombre,
        contrasena,
        repetirContrasena)) {
        nuevoUsuario.reset();
        Swal.fire({
            title: "Excelente",
            text: "Has sido registrado",
            icon: "success"
        });
    } 
});

const PASSWORD_MIN_CHARACTERS = 6;

const validarFormulario = (
    email = "",
    nombre = "",
    repetirNombre = "",
    contrasena = "",
    repetirContrasena = "",
) => {
    if (email.length == 0) {
        Swal.fire({
            title: "Error",
            text: "El email es incorrecto",
            icon: "Error"
          });
        return false;
    }
    if (nombre.length == 0) {
        Swal.fire({
            title: "Error",
            text: "El nombre de usuario es obligatorio",
            icon: "Error"
          });
        return false;
    }
    if (repetirNombre.length == 0) {
        Swal.fire({
            title: "Error",
            text: "Debe repetir el nombre de usuario",
            icon: "Error"
          });
        return false;
    }
    if (nombre !== repetirNombre) {
        Swal.fire({
            title: "Error",
            text: "Los nombres no coinciden",
            icon: "Error"
          });
        return false;
    }
    if (contrasena.length == 0) {
        mensajes.push("La contraseña es obligatoria")
        imprimirMensaje(3);
        return false;
    }
    if (repetirContrasena.length == 0) {
        Swal.fire({
            title: "Error",
            text: "Debe ingresar una contraseña",
            icon: "Error"
          });
        return false;
    }
    if (contrasena !== repetirContrasena) {
        Swal.fire({
            title: "Error",
            text: "Las contraseñas no coinciden",
            icon: "Error"
          });
        return false;
    }
    if (contrasena.length < PASSWORD_MIN_CHARACTERS) {
        Swal.fire({
            title: "Error",
            text: `La contraseña debe tener como minimo ${PASSWORD_MIN_CHARACTERS} caracteres`,
            icon: "Error"
          });
        return false;
    }
    return true;
};



const registrarUsuario = (
    email,
    nombre,
    repetirNombre,
    contrasena,
    repetirContrasena
) => {
    const tieneErrores = validarFormulario(email,
        nombre,
        repetirNombre,
        contrasena,
        repetirContrasena)

if (!tieneErrores) {
    return false;
}

if (isExisteUsuario(usuarios, nombre)) {
    Swal.fire({
        title: "Error",
        text: "El usuario ya existe",
        icon: "Error"
      });
    return false;
}

let unUsuario = new Usuario (nombre, contrasena);
usuarios.push(unUsuario);
actualizarListaEnStorage(usuarios);
return true;
};



