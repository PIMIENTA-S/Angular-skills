import { Component, Input } from '@angular/core';

import { Characters } from './../interfaces/characters.interface';



@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPageComponent {
    public charactersDBZ: Characters[] = [{
        name: 'Trunks',
        power: 8000
    },{
        name: 'Goku',
        power: 10000
    },{
        name: 'Vegeta',
        power: 9500
    }]

    newCharacter( charaterNew: Characters ):void {
        console.log(charaterNew)
        this.charactersDBZ.push(charaterNew)

        // console.log(this.charactersDBZ);
    };

    onDeleteCharacter(index:number){
        this.charactersDBZ.splice(index, 1)

    }
}