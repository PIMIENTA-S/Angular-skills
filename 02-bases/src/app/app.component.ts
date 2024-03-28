import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Todo se maneja por clases
export class AppComponent {
  public title: string = 'Angular aplications';
  public author: string = "PIMIENTA'S"
}
