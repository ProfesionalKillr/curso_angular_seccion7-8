import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){}

  get tags(){
    return this.gifsService.tagsHistory
  }

  tagsInput(tag:string){
    return this.gifsService.searchTag(tag)
  }

}
