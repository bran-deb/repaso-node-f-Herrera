const dedpul = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'marrano'
}


function imprimeHeroe({ nombre, apellido, poder }) {
    console.log(nombre, apellido, poder);
}

imprimeHeroe(dedpul)


const heroes = ['Dedpul', 'superman', 'batman']

const [, , h3] = heroes

console.log(h3);