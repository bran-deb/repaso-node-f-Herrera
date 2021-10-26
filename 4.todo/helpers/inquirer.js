const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

// la lista del menu principal
const preguntas = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} salir`
            }
        ]
    }
]


//menu principal de la consola
const inquireMenu = async () => {
    console.clear()
    console.log('======================='.green)
    console.log('seleccione una opcion '.white)
    console.log('=======================\n'.green)

    const { option } = await inquirer.prompt(preguntas)//se le manda un array con las opciones
    return option
}

//metodo para pausar y continuar la consola con un enter
const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)
}

//metodo para crear una tarea
const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {       //validar para no ingresar valores no nulos
                    return 'por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { description } = await inquirer.prompt(question)
    return description
}

//listado de tareas para borrar
const listadoTareasParaBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        }
    })

    //agregamos la opcion cero de cancelar (unfhift lo pone al principio del array)
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas)//se le manda un array con las opciones
    return id
}

//mandar mensaje de confirmacion para borrado (y/n)
const confirmar = async (message) => {

    const preguntas = [
        {
            type: 'confirm',//boolean
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(preguntas)//le manda un mensaje de confirmacion
    return ok
}

//muestra una lista de tareas completas o incompletas y poder marcarlas
const mostrarListadoChecklist = async (tareas = []) => {

    const choices = tareas.map((tarea, id) => {

        const idx = id + 1
        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false//muestra la propiedad para ser seleccionado y si esta o no marcado
        }
    })

    const pregunta = [
        {
            type: 'checkbox',//regresa un array con todos los id seleccionados
            name: 'ids',
            message: 'selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta)//nos da un listado seleccionable
    return ids
}



module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasParaBorrar,
    confirmar,
    mostrarListadoChecklist
}
