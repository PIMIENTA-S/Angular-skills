import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  }];
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number):void{
    let i = index
    console.log(index)
    this.onDelete.emit(i)
  };
  
  // hola(){
  //   console.log(this.charactersList)

  // }
}
// debugger;
