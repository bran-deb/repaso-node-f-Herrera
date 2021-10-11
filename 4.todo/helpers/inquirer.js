const inquirer = require('inquirer');
require('colors');

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

const inquireMenu = async () => {
    console.clear()
    console.log('======================='.green)
    console.log('seleccione una opcion '.green)
    console.log('=======================\n'.green)

    const { option } = await inquirer.prompt(preguntas)
    return option
}

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


module.exports = {
    inquireMenu,
    pausa
}
