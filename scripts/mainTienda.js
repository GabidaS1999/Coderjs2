if (!USUARIO_LOGUEADO) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No has iniciado sesion",
        allowOutsideClick: false,
        confirmButtonText: '<a href="../index.html">Volver a inicio</a> ',
        confirmButtonColor: 'White'
    });

}

const card = document.querySelector("#contenedor-productos");
let productos = [];
const getAllProductos = async () => {
    const resp = await fetch("/JSON/productos.json");
    const data = await resp.json();
    productos = data;
};

const imprimirCarta = (list = []) => {
    list.forEach((unProducto) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <img src="${unProducto.imagen}" alt="${unProducto.titulo}">
        <p>${unProducto.descripcion}</p>
        <p>${unProducto.precio}</p>
    `
        card.append(div);
    });

};

const inicializarPagina = async () => {
    await getAllProductos();
    imprimirCarta(productos);
}

inicializarPagina();