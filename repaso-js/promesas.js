const empleados = [
    { id: 1, nombre: 'linda' },
    { id: 2, nombre: 'pedrales' },
    { id: 3, nombre: 'pañales' }
]
const salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
]


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id)?.nombre
        empleado
            ? resolve(empleado)
            : reject(`no existe el empleado con id ${id}`)
    })
}
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id).salario
        salario
            ? resolve(salario)
            : reject(`No existe el id ${id} del salario`)
    })
}

const id = 1
let nombre

getEmpleado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log('Empleado: ', nombre, 'salario: ', salario))
    .catch(err => console.log(err))