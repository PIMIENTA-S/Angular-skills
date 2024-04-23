import { Component } from '@angular/core';

@Component({
    selector: 'search-box-page',
    template: `
    <h1>Buscar:</h1>
    <input type="text"
        class="form-control"
        placeholder="Buscar gifs..."
    >
    `
    
})

export class SearchBoxComponent {
    constructor() { }
}