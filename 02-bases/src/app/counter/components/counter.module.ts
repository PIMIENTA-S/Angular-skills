import { NgModule } from "@angular/core";
import { counterClass } from "./counter/counter.component";


@NgModule({
    declarations: [
        counterClass
    ],

    exports: [
        counterClass
    ]

})

export class counterModule{}