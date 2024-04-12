import { Component, Input } from '@angular/core';
import { characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()

  public charactersList: characters[] = [{
    name: 'Picoro',
    power: 7000
  }]


}
