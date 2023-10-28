import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.proyectos = [
      {id:1, name: "Gestor de Actividades", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-eberhard-grossgasteiger-1428277.jpg", tecnologys: ["Angular","TypeScript","CSS","HTML","NodeJS","MongoDB"]},
      {id:2, name: "Gestor de Usuarios", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-nicolas-poupart-2360569.jpg", tecnologys: ["Angular","TypeScript","CSS","HTML","JAVA","MySQL","MongoDB"]},
      {id:3, name: "App de Clima", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-nicolas-poupart-2360569.jpg", tecnologys: ["Angular","TypeScript","CSS","HTML"]},
      {id:4, name: "App de Consumo de APIMarvel", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-eberhard-grossgasteiger-1428277.jpg", tecnologys: ["Angular","TypeScript","CSS","HTML","JAVA","MySQL","MongoDB"]},
      {id:5, name: "App de Clima", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-nicolas-poupart-2360569.jpg", tecnologys: ["Angular","TypeScript","CSS","HTML"]},
      {id:6, name: "App de Consumo de APIMarvel", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-eberhard-grossgasteiger-1428277.jpg", tecnologys: ["Angular","TypeScript","CSS","HTML","JAVA","MySQL","MongoDB"]}
    ]
  }

}
