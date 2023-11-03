import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ProyectosService } from 'src/app/Services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos!: Array<any>;

  constructor(private proyectService:ProyectosService) {}

  ngOnInit(): void {
    AOS.init();
    this.proyectos = this.proyectService.getProyects();
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
