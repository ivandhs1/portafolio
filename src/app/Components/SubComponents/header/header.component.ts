import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color:string='';

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event:any){

    if(window.scrollY > 300){
      this.color='#000000'    
    }else{
      this.color='transparent'
    }
  } 
}
