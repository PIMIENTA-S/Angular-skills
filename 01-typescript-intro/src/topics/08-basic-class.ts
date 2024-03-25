
export class Person {
    public name: string;
    public address : string;

    constructor(name: string, address: string){
        this.name = name
        this.address = address
    }
}

class Personaje{
    constructor(public name: string, public hp: number){}
}

let goku = new Personaje("kakaroto", 10000);

console.log(goku)

const ironman = new Person("angel", "valledupar")

console.log(ironman)