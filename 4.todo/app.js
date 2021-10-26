require('colors')
const { guardarDB, leerDB } = require('./db/guardarArchivo');
const {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasParaBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()
    if (tareasDB) {                                     //cargar tareas
        tareas.cargarTareasFromArray(tareasDB)          //mandamos a la memoria las tareas de db
    }

    do {
        opt = await inquireMenu()
        // console.log({ opt })

        switch (opt) {
            case '1':
                const descripcion = await leerInput('Descripcion: ')
                tareas.crearTarea(descripcion)
                break;
            case '2':
                tareas.listadoCompleto()
                // console.log(tareas.listadoArr)
                break
            case '3':
                //listar completadas
                tareas.listarPendientesCompletadas(true)
                break;
            case '4':
                //listar tareas pendientes
                tareas.listarPendientesCompletadas(false)
                break
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr)
                console.log(ids)
                break
            case '6':
                //borrrar tareas
                const id = await listadoTareasParaBorrar(tareas.listadoArr)
                //verificar si no quiere cancelar
                if (id !== '0') {
                    const ok = await confirmar('Esta seguro?')
                    //verifica si quiere borrar tarea
                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log('tarea borrada')
                    }
                }
                break
            default:
                break;
        }

        //guardamos en el archivo json despues de ejecutar cualquier caso
        guardarDB(tareas.listadoArr)

        await pausa()

    } while (opt !== '0');
    // pausa()
}

main()