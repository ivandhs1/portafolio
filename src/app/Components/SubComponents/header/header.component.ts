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
  header:any = document.querySelector('header')

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event:any){

    if(window.scrollY > 360){
      this.color='#010122'    
    }else{
      this.color='transparent'
    }
  } 
}
