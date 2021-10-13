const Tarea = require("./tarea");

class Tareas {

    _listado = {}

    constructor() {
        this._listado = {}
    }

    //metodo para crear una nueva tarea mandandole la desc
    crearTarea(descripcion = '') {

        const tarea = new Tarea(descripcion)
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas
