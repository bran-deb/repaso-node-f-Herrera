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
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. salir'
            }
        ]
    }
]


//menu principal de la consola
const inquireMenu = async () => {
    console.clear()
    console.log('======================='.green)
    console.log('seleccione una opcion '.green)
    console.log('=======================\n'.green)

    const { option } = await inquirer.prompt(preguntas)
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
                    // }(value.length === 0)
                    // ? 'Por favor ingrese un valor'
                    // : true
                }
                return true
            }
        }
    ]

    const { description } = await inquirer.prompt(question)
    return description
}



module.exports = {
    inquireMenu,
    pausa,
    leerInput
}
