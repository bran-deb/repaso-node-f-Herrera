const Tarea = require("./tarea");

class Tareas {

    _listado = {}

    //creamos un listado en array y le añadimos las tareas por key
    get listadoArr() {

        const listado = []
        //Object.keys me devuelve un array
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]        //creamos una nueva tarea por cada key
            listado.push(tarea)
        })
        return listado
    }


    constructor() {
        this._listado = {}
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }


    //metodo para crear una nueva tarea mandandole la desc
    crearTarea(descripcion = '') {

        const tarea = new Tarea(descripcion)
        this._listado[tarea.id] = tarea
    }


    //metodo para leer las tareas por el key de cada tarea
    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    //metodo para ver si una tarea esta completa o incompleta(completada:null)
    listadoCompleto() {

        console.log()
        this.listadoArr.forEach((tarea, i) => {

            const idx = `${i + 1}`.green        //cambiamos el index para que inicie en 1
            const { descripcion, completadoEn } = tarea
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red

            console.log(`${idx}. ${descripcion}::${estado}`)
        })
    }

    listarPendientesCompletadas(completadas = true) {

        console.log()
        let contador = 0
        this.listadoArr.forEach(tarea => {

            const { descripcion, completadoEn } = tarea
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            if (completadas) {
                //mostrar completadas
                if (completadoEn) {
                    contador += 1
                    console.log(`${(contador + '.').green} ${descripcion}::${completadoEn}`)

                }
            } else {
                //mostrar tareas pendientes
                if (!completadoEn) {
                    contador += 1
                    console.log(`${(contador + '.').green} ${descripcion}::${estado}`)

                }
            }
        })
    }
}

module.exports = Tareas
