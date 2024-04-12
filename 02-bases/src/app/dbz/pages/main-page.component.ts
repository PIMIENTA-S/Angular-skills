import { characters } from './../interfaces/characters.interface';
import { Component } from '@angular/core';



@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPageComponent {
    public charactersDBZ: characters[] = [{
        name: 'Trunks',
        power: 8000
    },{
        name: 'Goku',
        power: 10000
    },{
        name: 'Vegeta',
        power: 9500
    }]
}