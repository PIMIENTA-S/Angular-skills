import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';


const routes : Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },

  {
    path: 'contact',
    component: ContactPageComponent
  },
  { 
    // this metohd call lazy load server to make more little the aplication
    path: 'countries',
    loadChildren: ()=> import( './countries/countries.module' ).then( m => m.CountriesModule )
  },

  {
    path: '**',
    redirectTo: 'countries'
  }


]
// se importa con .forRoot debido a que es el router principal de la pagina
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
