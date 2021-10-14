const fs = require('fs')


//creamos nuestra funcion para guardar los datos en una txt
const guardarDB = (data) => {
    //en archivo especificamos el directorio y el tipo de archivo a crear
    const archivo = './db/data.json'
    //mandamos el directorio y data a guardar
    fs.writeFileSync(archivo, JSON.stringify(data))
}


module.exports = {
    guardarDB
};
