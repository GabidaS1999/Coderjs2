const LOCAL_STORAGE_NAME = "usuarios";
const actualizarListaEnStorage = (list =[] ) => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(list));
}

const recuperarListaEnStorage = () => {
    const recuperados =JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
    if (recuperados) {
        return recuperados.map((e) =>{
            return new Usuario(e.nombre, e.contrasena);
        })
    }else{
        return [];
    }
    
}

let usuarios = recuperarListaEnStorage();

const isExisteUsuario =(usuarios = [], identificador = "") =>{
    return usuarios.some(
        (unUsuario) => unUsuario.nombre === identificador,
        (unUsuario) => unUsuario.email === identificador
    );
}
const getUsuario = (usuarios = recuperarListaEnStorage(), identificador = "") =>{
    return usuarios.find((unUsuario) => unUsuario.nombre === identificador);
}



const USER_LOGED = "userisLoged"
const registrarInicio = (unUsuario) =>{
    sessionStorage.setItem(USER_LOGED, JSON.stringify(unUsuario));
}
const recuperarUsuarioLogueado = ()=>{
    return JSON.parse(sessionStorage.getItem(USER_LOGED)) || false;
}
const USUARIO_LOGUEADO = recuperarUsuarioLogueado();


