import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
    providedIn: 'root'
})

export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1/'

    constructor(private http: HttpClient) { 

    }

    capitalSearch( term: string ): Observable<Country[]>{

        const url = `${ this.apiUrl }capital/${ term }`

        return this.http.get<Country[]>( url )
            .pipe( catchError( () => of([]))
        );
    }

    searchCountry( term: string ): Observable<Country[]>{

        const urlC = `${ this.apiUrl }name/${ term }`;

        return this.http.get<Country[]>( urlC )
            .pipe( catchError( () => of([]) )
        );

    }

    searchRegion( region: string ): Observable<Country[]>{

        const urlR = `${ this.apiUrl }region/${ region }`

        return this.http.get<Country[]>( urlR )
            .pipe( catchError( () => of([]) ) )

    }

    
}