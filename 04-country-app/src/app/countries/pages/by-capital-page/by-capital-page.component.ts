import { Component, Output } from '@angular/core';

import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor( private countriesService: CountryService ){}


  searchByCapital( term: string ): void{
    
    this.countriesService.capitalSearch( term )
      .subscribe( country => {
        this.countries = country
      } )


  }

}
