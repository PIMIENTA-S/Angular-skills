import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public regionResult: Country[] = [];

  constructor( private countryService: CountryService ){}

  searchRegion( term: string ){
    this.countryService.searchRegion(term)
      .subscribe( region => {
        this.regionResult = region
      } )
  }

}
