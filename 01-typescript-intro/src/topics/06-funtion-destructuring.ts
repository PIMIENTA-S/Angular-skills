


export interface products {
    name: string;
    price: number
}

const phone: products = {
    name : "Moto g30 ultra",
    price: 200
}

const table: products = {
    name: "Ideapad 390",
    price: 304
}


export interface productsCounts {
    tax: number;
    products : products[]
}
                                            // [number,number]

// function facturingProducts(options: productsCounts):number[]{

// function facturingProducts({tax, products}: productsCounts):number[]{

export function facturingProducts(options: productsCounts):number[]{

    const {tax, products} = options;

    let count = 0

    products.forEach(({price}) => {
        count += price
    })

    return [count, count * tax]
}


const shoppingCart = [phone, table]
const tax = 0.15


const [total, price] = facturingProducts({
    tax,
    products: shoppingCart
})

console.log(total, price)


const cachones = ["jesus", "kevin", "alejandro"]

const [, ...a3] = cachones

console.log(a3)

export{};