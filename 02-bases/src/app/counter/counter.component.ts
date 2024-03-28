import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h3>Mi contador es: {{ counter }}</h3>

    <button (click)="plus_menos(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="plus_menos(-1)">-1</button>
    `
})

export class counterClass {

    public counter:number = 10;

    plus_menos( value:number ){
        this.counter += value
    }

    reset(){
        this.counter = 10;
    }

}

