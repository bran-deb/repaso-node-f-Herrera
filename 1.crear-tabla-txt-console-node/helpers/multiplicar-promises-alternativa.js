const fs = require('fs');


const crearArchivo = async (base = 5) => {

    return new Promise((resolve, reject) => {

        console.log('==========================')
        console.log(`====== TABLA DEL ${base} =======`)
        console.log('==========================')
        const max = 10
        let salida = ''

        for (let i = 1; i <= max; i++) {
            salida += `|\t${i}x${base}=${i * base}\t\t|\n`;
        }
        console.log(salida)

        //Creamos un txt de lo que imprime la [salida]
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        resolve`tabla-${base}.txt`
    })
}


// module.exports = {
//     crearArchivo
// }