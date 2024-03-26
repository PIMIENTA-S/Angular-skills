
export function whatIsMyType<T>(argument: T){
    return argument;

}

// los genericos se utilizan principalmenta para reconocer el tipo de dato que entrara a la funcion y poder procesarla de una manera correcta 
// permiten un mayor manejo, es decir tener una funcion que dependiendo del tipo de dato cambie su funcionamiento

let string = whatIsMyType<string>("Hola Mundo");
let number = whatIsMyType<number>(1001.32556);
let arregloNumber = whatIsMyType<number[]>([1,2,3,4,5]);

console.log(string.split(" "))
console.log(number.toFixed(3))
console.log(arregloNumber.reverse())