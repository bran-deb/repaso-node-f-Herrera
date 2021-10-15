const fs = require('fs')


//en archivo especificamos el directorio y el tipo de archivo a crear
const archivo = './db/data.json'

//creamos nuestra funcion para guardar los datos en una txt
const guardarDB = (data) => {
    //mandamos el directorio y data a guardar
    fs.writeFileSync(archivo, JSON.stringify(data))
}


const leerDB = () => {

    if (!fs.existsSync(archivo)) {
        return null
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    const data = JSON.parse(info)
    console.log(data)

    return data
}



module.exports = {
    guardarDB,
    leerDB
};
