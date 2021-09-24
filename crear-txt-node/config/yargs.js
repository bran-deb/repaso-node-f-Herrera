const argv = require('yargs')
    .option('b', {                  //agregado forma corta de la base
        alias: 'base',              //damos los valores como alias type etc
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {                  //agregamos forma corta de listar
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {                  //agregamos forma corta de listar
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'limite de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b && argv.h)) {
            throw 'la base tiene que ser numero'
        }
        return true
    })
    .argv

module.exports = argv