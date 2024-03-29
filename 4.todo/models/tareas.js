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

    //muestra una lista de tareas pendientes o completadas
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
                    console.log(`${(contador + '.').green} ${descripcion}::${completadoEn.green}`)

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

    //cambia el estado de las tareas pendientes y completadas
    toggleCompletadas(ids = []) {
        ids.forEach(id => {

            const tarea = this._listado[id]
            // si la tarea esta incompleta guardamos la fecha en la que se completa
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                tarea = this._listado[tarea.id]
                tarea.completadoEn = null
            }
        })
    }
}

module.exports = Tareas
