import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    this.scrollTop(); 
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  scrollTop(){
    window.scrollTo({
      behavior: 'smooth',
      top:0
    })
  }

}
