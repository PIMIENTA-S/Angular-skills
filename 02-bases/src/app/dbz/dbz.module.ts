import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    mainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    mainPageComponent
  ]
})
export class DbzModule { }
