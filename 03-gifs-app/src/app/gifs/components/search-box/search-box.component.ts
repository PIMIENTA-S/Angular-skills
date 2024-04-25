import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'search-box-page',
    template: `
    <h1>Buscar:</h1>
    <input type="text"
        class="form-control"
        placeholder="Buscar gifs..."
        (keyup.enter)="searchTag()"
        #tagSearch
    >
    `
    
})

export class SearchBoxComponent {
    
    @ViewChild( 'tagSearch' )
    public tagSearch!: ElementRef<HTMLInputElement>


    constructor( private gifsService: GifsService ) { }

    searchTag(){
        const newTag = this.tagSearch.nativeElement.value;
















        this.gifsService.searchTag(newTag)
        this.tagSearch.nativeElement.value = ''
    }



}