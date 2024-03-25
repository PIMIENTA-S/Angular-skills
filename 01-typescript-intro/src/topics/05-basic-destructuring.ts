

interface Songs {
    name: string;
    duration: number;
    details: Details;
    sub: boolean;
}


interface Details {
    author: string;
    year: number;
}

const falling: Songs = {
    name: "Falling",
    duration: 200,
    details: {
        author: 'Trevor',
        year: 2017
    },
    sub: false
}


// se puede renombrar las variables
//const { name: nameSong, duration } = falling


/*

forma 1

const { 
    name: nameSong,
    duration,
    details: {author}
} = falling


*/


// forma 2
// desestructuracion anidada

const {name, duration, details} = falling
const {author} = details

console.log(`Nombre de la cancion ${name}, Su duracion ${duration} y su autor ${author}`)



const [ , , , c5, c6 = 'not found'] : string[] = ['Kevin', 'Alejo', 'Jesus', 'Marco']

console.error(c5, c6)



export{};