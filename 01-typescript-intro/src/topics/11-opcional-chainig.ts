class Passenger{

    constructor(public name: string, public children?: string[]){
    }
}

let pasajero1 = new Passenger("Saira", ['Josue'])
let pasajero2 = new Passenger("Mare", ['Saira', 'Victor', 'Juan', 'Angell'])
let pasajero3 = new Passenger("Angell")

function CountChildren(passenger: Passenger):number{

    let {children} = passenger
    // si no tiene hijos es decir, es null or undefined retornará 0 (||)
    // con el children! (con signo de exclamacion) significara que siempre recibirá un numero
    return children?.length || 0;
}

console.log(CountChildren(pasajero2))

export{};