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
}

module.exports = Tareas
