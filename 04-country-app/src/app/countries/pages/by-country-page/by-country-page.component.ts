import { CountryService } from './../../services/countries.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countryResult: Country[] = [];

  constructor( private countryService: CountryService ){}

  searchCountry( term: string ){
    this.countryService.searchCountry( term )
      .subscribe( country => {
        this.countryResult = country
      } )
  }


}
