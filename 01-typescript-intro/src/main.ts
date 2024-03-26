import './style.css'

// import './topics/01-basic-types.ts'
// import './topics/02-object-interface.ts'
// import './topics/03-basic-funtions.ts'
// import './topics/04-homework-types.ts'
// import './topics/05-basic-destructuring.ts'
// import './topics/06-funtion-destructuring.ts'
// import './topics/07-import-export.ts'
// import './topics/08-basic-class.ts'

// import './topics/09-basic.generics.ts'
import './topics/11-opcional-chainig.ts'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
hola mundo
`

console.log("Hola mundo")

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
