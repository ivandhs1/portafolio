import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("inicia");
    
  }

  color:string='';

  @HostListener('window:scroll', ['$event']) 
  onScrollEvent($event:any){
    console.log("holaaa desde header");
    console.log(window.scrollY);
    

    if(window.scrollY > 300){
      console.log("arriba de 300");
      
      this.color='#010128'    
    }else{
      this.color='transparent'
    }
  } 
}
