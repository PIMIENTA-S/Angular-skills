import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output()
  onValue = new EventEmitter<string>();


  inputEmit( txt : string ): void{ 
    this.onValue.emit(txt)
  }



  @Input()
  public placeholder: string = ''



}
