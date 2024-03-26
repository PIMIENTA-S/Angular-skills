
export class Person {
    // public name: string;
    // public address : string;

    constructor(public name: string, public lastName: string, public address?: string){
    }
}

// class Personaje extends Person{
//     constructor(public name: string, public power: string, public hp: number, public address?: string){
//         super(name, address);
//     }
    
// }

class Personaje{

    constructor(
        public name: string,
        public power: string, 
        public hp: number, 
        public p1: Person){
    }
    
}

let tony = new Person("Tony", "Stark", "man 12-45#1")


let goku = new Personaje("goku", "supersayayin", 10000, tony)

console.log(goku)