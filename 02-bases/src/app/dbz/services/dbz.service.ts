import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';



import { Characters } from '../interfaces/characters.interface';

@Injectable({
    providedIn: 'root'
})


export class DbzService {
    public charactersDBZ: Characters[] = [{
        id: uuid(),
        name: 'Trunks',
        power: 8000
    },{
        id: uuid(),
        name: 'Goku',
        power: 10000
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 9500
    }]

    newCharacter( characterNew: Characters ):void {
        
        const addCharacter : Characters = { id: uuid(), ...characterNew }

        this.charactersDBZ.push(addCharacter)
    };

    // onDeleteCharacter(index:number){
    //     this.charactersDBZ.splice(index, 1)

    // }

    deleteCharacterById( id: string ){
        this.charactersDBZ = this.charactersDBZ.filter( charactersDBZ => charactersDBZ.id !== id)
    }
    
}