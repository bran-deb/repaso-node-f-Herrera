// setTimeout(() => {
//     console.log('hola mundo');
// }, 3000);



const getUsuarioByID = (id, funcion) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        funcion(usuario);
    }, 2000);
}

getUsuarioByID(10, (usuario) => {
    console.log(usuario);
})