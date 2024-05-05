import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  // @Output()


  searchByCapital( term: string ): void{
    console.log('Desde capital')
    console.log(term)
  }

}
