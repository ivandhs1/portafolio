import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProyectosService } from 'src/app/Services/proyectos.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  private id:any = "";
  public proyect:any;

  constructor(private _route: ActivatedRoute, private proyectService:ProyectosService, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    AOS.init();
    this.id = this._route.snapshot.paramMap.get("id");
    this.obtenerProyect();
    this.scrollTop();
  }

  scrollTop(){
    window.scrollTo({
      behavior: 'smooth',
      top:0
    })
  }
  obtenerProyect(){
    this.proyect = this.proyectService.getOneProyect(this.id);
  }
}
