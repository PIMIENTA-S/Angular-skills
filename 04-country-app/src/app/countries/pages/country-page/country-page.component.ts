import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor( 
    private activatedRouter: ActivatedRoute,
    private countryService:  CountryService
  ){

  }
  ngOnInit(): void {
    this.activatedRouter.params
      .subscribe( ({ id } )=> {
        
        this.countryService.searchByCode( id )
          .subscribe( id => {
            console.log(id)
          } )

      } )
  }

}
