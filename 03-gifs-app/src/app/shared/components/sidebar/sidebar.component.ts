import { GifsService } from './../../../gifs/services/gifs.service';
import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ){


  }

  get showHistory(){
    return this.gifsService.tagHistory
  }
  
  


}
