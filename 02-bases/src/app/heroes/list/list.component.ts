import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ojo de halcon', 'Ironman']
  public deleteHero?: string;
  heroRemove():void {
    this.deleteHero = this.heroNames.pop()
  }
}
