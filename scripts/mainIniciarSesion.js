const miFormulario = document.getElementById("loginFormUser");

miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombreUsuario").value.trim();
    let contrasena = document.getElementById("contrasena1").value.trim();


    const unUsuario = getUsuario(usuarios, nombre);

    if (!unUsuario) {
        Swal.fire({
            title: "Error",
            text: "El usuario no existe",
            icon: "error"
          });
        return false;
    }

    if (!unUsuario.isPassword(contrasena)) {
        Swal.fire({
            title: "Error",
            text: "La contraseña no es correcta",
            icon: "error"
          });
        return false;
    }
    unUsuario.isLoged = true;
    registrarInicio(unUsuario);
    miFormulario.reset();
    Swal.fire({
        title: "Excelente",
        text: "Has iniciado sesion",
        icon: "success"
    });

});

const validarFormulario = (nombre, contrasena) => {
    if (nombre.length == 0) {
        return false;
    }
    if (contrasena.length == 0) {
        return false;
    }

    return true;
}

const MY_LOGIN = document.getElementById("loginFormUser")

