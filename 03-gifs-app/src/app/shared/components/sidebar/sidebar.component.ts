import { GifsService } from './../../../gifs/services/gifs.service';
import { Component, ElementRef, ViewChild, input } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // @ViewChild( 'tag' )
  // public tagAgain!: ElementRef<HTMLButtonElement>;

  constructor( private gifsService: GifsService ){


  }

  get showHistory(){
    return this.gifsService.tagHistory
  }

  searchAgain( tag: string ): void{

    this.gifsService.searchTag(tag)

  }
  
  


}
