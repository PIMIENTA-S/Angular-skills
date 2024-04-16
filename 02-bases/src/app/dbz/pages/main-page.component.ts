import { DbzService } from './../services/dbz.service';
import { Component, Input } from '@angular/core';

import { Characters } from './../interfaces/characters.interface';



@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPageComponent {
    
    constructor( public dbzService:DbzService ){

    }
}