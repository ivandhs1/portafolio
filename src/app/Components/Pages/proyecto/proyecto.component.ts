import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private _route: ActivatedRoute, private route: Router,private proyectService:ProyectosService, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    AOS.init();
    this.id = this._route.snapshot.paramMap.get("id");
    this.obtenerProyect(this.id);
    this.scrollTop();
  }

  scrollTop(){
    window.scrollTo({
      behavior: 'smooth',
      top:0
    })
  }

  obtenerProyect(id:number){
    this.proyect = this.proyectService.getOneProyect(id);
  }

  next(idP: number){
    let length: number = this.proyectService.obtenerLength();

    if(idP==length){
      this.obtenerProyect(1);
      this.route.navigate(['/proyectos', 1 ]);
      this.scrollTop();
    }else{
      this.obtenerProyect(idP+1);
      this.route.navigate(['/proyectos', idP+1 ]);
      this.scrollTop();
    }
  }

}
