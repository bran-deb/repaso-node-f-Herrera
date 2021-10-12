require('colors')
const { inquireMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



const main = async () => {

    let opt = ''

    do {
        // opt = await inquireMenu()
        // console.log({ opt })


        const tareas = new Tareas()
        const tarea = new Tarea('Comprar comida')
        console.log(tarea)

        await pausa()

    } while (opt !== '0');
    // pausa()
}

main()