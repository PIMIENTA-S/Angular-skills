import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
    
    private _SearchHistory: string[] = []
    
    constructor() { }

    get tagHistory(){
        return [...this._SearchHistory]
    }

    orderTag( tag: string ){

        tag = tag.toLowerCase()

        for (let i = 0; i <= this._SearchHistory.length; i ++ ){

            if (this._SearchHistory[i] === tag){
                delete this._SearchHistory[i]

            }

        }

    }

    searchTag( tag: string ): void{

        if (tag.length === 0){return;}

        this.orderTag(tag)

        this._SearchHistory.unshift(tag)
        
    }


    
}