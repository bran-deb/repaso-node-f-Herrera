const empleados = [
    { id: 1, nombre: 'linda' },
    { id: 2, nombre: 'pedrales' },
    { id: 3, nombre: 'pañales' }
]
const sueldo = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 }
]


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(empleado => empleado.id === id)

    empleado
        ? callback(null, empleado)
        : callback(`no existe`)
}

getEmpleado(1, (err, empleado) => {

    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado)
})