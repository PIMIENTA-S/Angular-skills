import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

    public gifsSearch : Gif[] = [];
    
    private _SearchHistory: string[] = [];
    private api_key : string = 'vacJu6iaVCJDQTiup44maLYMsXJEU6pM';
    private urlApi  : string = 'https://api.giphy.com/v1/gifs/';
    
    constructor( private http: HttpClient ) { 
        this.loadLocalStore();
        
        // this.searchTag(this._SearchHistory[0])

    }

    get tagHistory(){
        return [...this._SearchHistory]
    }

    orderTag( list: string[] ){

        // tag = tag.toLowerCase()

        // for (let i = 0; i <= this._SearchHistory.length; i ++ ){

        //     if (this._SearchHistory[i] === tag){
        //         delete this._SearchHistory[i]

        //     }

        // }

        const array = new Set (list.splice(0,10));
        this._SearchHistory = [...array]

        this.saveLocalStore()



    }

    // Serealizacion

    // El metodo stringify se usa para mandar las objetos, arrays y demas concatenados entre strings
    private saveLocalStore(): void{
        localStorage.setItem('history', JSON.stringify( this._SearchHistory ) )
    }

    private loadLocalStore(): void{
        if( localStorage.getItem('history') ) return;

        this._SearchHistory = JSON.parse(localStorage.getItem('history')!)
        // if ()
        // this.searchTag(this._SearchHistory[0])

    }

    searchTag( tag: string ): void{

        if (tag.length === 0){return;}
        
        this._SearchHistory.unshift(tag.toLowerCase())
        
        this.orderTag(this._SearchHistory)

        const params = new HttpParams() 
            .set('api_key', this.api_key)
            .set('limit', '15')
            .set('q', tag)

        this.http.get<SearchResponse>(` ${ this.urlApi }search`, { params })
            .subscribe(resp => {

                this.gifsSearch = resp.data;
                

                // console.log({gifs: this.gifsSearch})
            })



        // this.http.get('https://api.giphy.com/v1/gifs/search?api_key=vacJu6iaVCJDQTiup44maLYMsXJEU6pM&q=valorant&limit=15')
        // .subscribe(resp => {
        //     console.log(resp)
        // })
    }


    
}