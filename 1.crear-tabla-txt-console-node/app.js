//usamos las dependencias de yargs
const { crearArchivo } = require('./helpers/multiplicar-async');
const colors = require('colors')        //da color a la salida de consola
const argv = require('./config/yargs');

console.clear()

crearArchivo(argv.b, argv.l, argv.h)    //resive en los args la base y el listar
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))