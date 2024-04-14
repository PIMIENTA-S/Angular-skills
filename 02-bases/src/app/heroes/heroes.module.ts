import { CommonModule, NgClass } from "@angular/common";
import { NgModule } from "@angular/core";


import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],

    exports: [
        HeroComponent,
        ListComponent
],

    imports: [
        CommonModule
    ]

})



export class heroesModule{ }