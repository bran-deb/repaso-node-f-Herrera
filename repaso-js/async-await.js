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
        const empleado = empleados.find(e => e.id === id)?.nombre
        empleado
            ? resolve(empleado)
            : reject(`no existe el empleado con id ${id}`)
    })
}
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario
        salario
            ? resolve(salario)
            : reject(`No existe el id ${id} del salario`)
    })
}



const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id)
        const salarioo = await getSalario(id)
        return `Empleado: ${empleado} Salario: ${salarioo}`
    } catch (error) {
        throw error                                                 //throw para mandar el error o mejor dicho el reject
    }
}

const id = 3

getInfoUsuario(id)
    .then(msj => console.log(msj))
    .catch(err => console.log(err))
