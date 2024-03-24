
const personajes : string[] = ['vida', 'ataque', 'movimiento']

interface pokemon {
    name : string;
    vida : number;
    daño: number;
    movimiento?: string;
    // movimiento : string | undefined
}


const charizard : pokemon = {
    name : "charizard",
    vida : 1200,
    daño : 500
} 

charizard.movimiento="volar";

console.table(charizard)









export{};
