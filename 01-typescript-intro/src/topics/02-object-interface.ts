
const [] : string[] = ['vida', 'ataque', 'movimiento']

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


function atacado(pokemon: pokemon, damage: number):{}{

    const {vida} = pokemon;

    let newVida = vida - damage

    pokemon.vida = newVida

    return pokemon
    
}

const result = atacado(charizard, 560)

console.log(result)

charizard.movimiento="volar";

console.table(charizard)









export{};
