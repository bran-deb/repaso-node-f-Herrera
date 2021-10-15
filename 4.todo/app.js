require('colors')
const { guardarDB, leerDB } = require('./db/guardarArchivo');
const {
    inquireMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()
    if (tareasDB) {
        //establecer las tareas
    }
    await pausa()

    do {
        opt = await inquireMenu()
        // console.log({ opt })

        switch (opt) {
            case '1':
                const descripcion = await leerInput('Descripcion: ')
                tareas.crearTarea(descripcion)
                break;
            case '2':
                console.log(tareas.listadoArr)
                break
            default:
                break;
        }
        //guardamos en el archivo json
        guardarDB(tareas.listadoArr)

        await pausa()

    } while (opt !== '0');
    // pausa()
}

main()