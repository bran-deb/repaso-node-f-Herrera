const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `|\t${i} ${'x'.red} ${base} ${'='.red} ${i * base}\t|\n`;
        }
        if (listar) {
            console.log('=========================='.rainbow)
            console.log(`====== TABLA DEL ${base} =======`.blue)
            console.log('=========================='.rainbow)

            console.log(salida)
            console.log('=========================='.rainbow)
            console.log('=========================='.rainbow)
        }

        //Creamos un txt de lo que imprime la [salida]
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)      //le damos un directorio al cual se crea
        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
}


module.exports = {
    crearArchivo
}