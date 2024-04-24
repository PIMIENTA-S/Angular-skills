import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _SearchHistory: string[] = []
    
    constructor() { }

    get tagHistory(){
        return [...this._SearchHistory]
    }

    searchTag( tag: string ): void{

        if (tag.length === 0){return;}

        this._SearchHistory.unshift(tag)
        
    }


    
}