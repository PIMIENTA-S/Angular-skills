import { products,facturingProducts } from './06-funtion-destructuring';

const hogar : products[] = [
    {
    name: "LG full hd 4k",
    price: 1200
}, {
    name: "iphone 23",
    price: 600
}]





const [tax, price] = facturingProducts({
    tax: 0.15,
    products: hogar
})

console.log(tax,price)

