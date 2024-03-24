
function sumNumbers (a:number, b:number) : number {
    return a + b;
}


let sumNumbersArrow = (a:number, b:number):string => {

    return `${ a + b }`;
}

function multiply (firstNumber: number, secondNumber?: number, base : number = 3){

    return firstNumber * base;
}

let result = sumNumbers(2,5)
const resultArrow = sumNumbersArrow(4,3)
let multiplyResult = multiply(3)


console.log(result, resultArrow, multiplyResult)




export{};