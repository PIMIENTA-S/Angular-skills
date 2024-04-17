import { DbzService } from './../services/dbz.service';
import { Component, Input } from '@angular/core';

import { Characters } from './../interfaces/characters.interface';



@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPageComponent {
    
    constructor( private dbzService:DbzService ){
    }

    get charactersDBZ(): Characters[] {
        return this.dbzService.charactersDBZ
    }

    deleteCharacterById(id : string): void {
        this.dbzService.deleteCharacterById( id )
    }

    addCharacter( character: Characters ): void {
        this.dbzService.addCharacter( character )
    }


}