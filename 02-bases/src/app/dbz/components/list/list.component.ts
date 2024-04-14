import { Component, Input } from '@angular/core';

import { Characters } from './../../interfaces/characters.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()

  public charactersList: Characters[] = [{
    name: 'Picoro',
    power: 7000
  }]
  
  // hola(){
  //   console.log(this.charactersList)

  // }
}
// debugger;
