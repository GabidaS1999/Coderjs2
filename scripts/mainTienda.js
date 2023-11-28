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

let carrito =[];

const imprimirCarta = (list = []) => {
    list.forEach((unProducto) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <img class="card-img-top" src="${unProducto.imagen}" alt="${unProducto.titulo}">
        <p class="card-text">${unProducto.descripcion}</p>
        <p class="card-text">${unProducto.precio}</p>
    `
        card.append(div);

        let button = document.createElement("button");
        button.className = "boton btn btn-warning"
        button.innerText = `Obtener cupón`;

        div.append(button);

        button.addEventListener("click", (e)=>{
            Swal.fire(`"${unProducto.id}-1891" Dirijase a nuestra sucursal con este codigo para recibir su descuento de 50%`);
            
        });
    });
    
};


const inicializarPagina = async () => {
    await getAllProductos();
    imprimirCarta(productos);
}

inicializarPagina();

