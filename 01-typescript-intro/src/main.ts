import './style.css'

// import './topics/01-basic-types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-basic-funtions.ts'

import './topics/04-homework-types.ts'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
hola mundo
`

console.log("Hola mundo")

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
