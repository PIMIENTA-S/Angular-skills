
function sumNumbers (a:number, b:number) : number {
    return a + b;
}


let sumNumbersArrow = (a:number, b:number):string => {

    return `${ a + b }`;
}

function multiply (firstNumber: number, secondNumber?: number, base : number = 3){

    return firstNumber * base;
}

// let result = sumNumbers(2,5)
// const resultArrow = sumNumbersArrow(4,3)
// let multiplyResult = multiply(3)


// console.log(result, resultArrow, multiplyResult) 



interface personaje {
    name: string;
    hp: number;
    showHp: () => void
}

function helpPersonaje (personaje:personaje, amount: number) {

    if (personaje.hp >= 100){
        console.log("FULL")
    }else{
        personaje.hp += amount
    }



}


// No se usa la funcion fecha debido a que ya se especificó

const pikachu:personaje = {
    name : "pikachu",
    hp : 30,
    showHp () {
        console.log(`Puntos de vida ${this.hp}`)
    }
}
pikachu.showHp();

helpPersonaje(pikachu, 15);
helpPersonaje(pikachu, 11);

pikachu.showHp();



export{};