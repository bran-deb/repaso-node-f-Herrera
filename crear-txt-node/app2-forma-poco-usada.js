const { crearArchivo } = require('./helpers/multiplicar-async');

console.clear()

//esta es una forma de mandar parametros o argumentos por consola para nuestro programa
//y no mandar los parametros o argumentos desde el codigo mismo
const [, , arg3 = 'base=5'] = process.argv                  //acceder a los argumentos por consola
const [, base = 5] = arg3.split('=')                        //separamos el tercer argumento por un = y tomamos el regundo elemento




//remplazado con la base de arriba
// const base = 3

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))