import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    { 
        path: 'by-capital',
        component: ByCapitalPageComponent
    },
    { 
        path: 'by-country',
        component: ByCapitalPageComponent
    },
    { 
        path: 'by-region',
        component: ByCapitalPageComponent
    },
    { 
        path: 'by/:id',
        component: CountryPageComponent
    },
];


@NgModule({
    imports: [ 
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],

})
export class CountriesRoutingModule { }