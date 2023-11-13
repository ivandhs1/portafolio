import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectos!: Array<any>;

  constructor() { 
    this.proyectos = [
      {id:1, name: "Gestor de Actividades 1", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-eberhard-grossgasteiger-1428277.jpg", tecnologys: 
      [{titleTec:"Angular", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/angular.png"},{titleTec:"TypeScript", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/typescript.png"},{titleTec:"CSS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan", imgTec:"../../../../assets/images/logos/css.png"},
      {titleTec:"HTML", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/html.png"},{titleTec:"NodeJS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/nodejs.png"},{titleTec:"MongoDB", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/mongodb.png"}]},

      {id:2, name: "Gestor de Usuarios 2", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-nicolas-poupart-2360569.jpg", tecnologys: 
      [{titleTec:"Angular", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/angular.png"},{titleTec:"TypeScript", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/typescript.png"},{titleTec:"CSS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan", imgTec:"../../../../assets/images/logos/css.png"}]},
      
      {id:3, name: "App de Clima 3", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-nicolas-poupart-2360569.jpg", tecnologys:
      [{titleTec:"Angular", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/angular.png"},{titleTec:"TypeScript", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/typescript.png"},{titleTec:"CSS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan", imgTec:"../../../../assets/images/logos/css.png"},
      {titleTec:"HTML", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/html.png"},{titleTec:"NodeJS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/nodejs.png"},{titleTec:"MongoDB", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/mongodb.png"}]},

      {id:4, name: "App de Consumo de APIMarvel 4", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-eberhard-grossgasteiger-1428277.jpg", tecnologys: 
      [{titleTec:"Angular", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/angular.png"},{titleTec:"TypeScript", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/typescript.png"},{titleTec:"CSS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan", imgTec:"../../../../assets/images/logos/css.png"},
      {titleTec:"HTML", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/html.png"},{titleTec:"NodeJS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/nodejs.png"},{titleTec:"MongoDB", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/mongodb.png"}]},

      {id:5, name: "App de Clima 5", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-nicolas-poupart-2360569.jpg", tecnologys: 
      [{titleTec:"Angular", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/angular.png"},{titleTec:"TypeScript", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/typescript.png"},{titleTec:"CSS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan", imgTec:"../../../../assets/images/logos/css.png"},
      {titleTec:"HTML", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/html.png"},{titleTec:"NodeJS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/nodejs.png"},{titleTec:"MongoDB", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/mongodb.png"}]},

      {id:6, name: "App de Consumo de APIMarvel 6", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias tempora corporis sit maiores suscipit, consectetur tempore ullam qui illo corrupti similique, vero necessitatibus enim veniam praesentium pariatur! Incidunt, nulla.", image:"../../../../assets/images/recicle/pexels-eberhard-grossgasteiger-1428277.jpg", tecnologys: 
      [{titleTec:"Angular", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/angular.png"},{titleTec:"TypeScript", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/typescript.png"},{titleTec:"CSS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan", imgTec:"../../../../assets/images/logos/css.png"},
      {titleTec:"HTML", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/html.png"},{titleTec:"NodeJS", version: "1.45.1", descriptionTec:"Lorem daure afdsa nvo reifafas jfaskfkasfk sahdan",imgTec:"../../../../assets/images/logos/nodejs.png"}]}
  ]}

  getProyects(){
    return this.proyectos;
  }

  getOneProyect(idP: number){
    let proyectP : any;
    this.proyectos.forEach((proyect:any) => {
      if(proyect.id == idP){
        proyectP = proyect;
      }
    })
    return proyectP;
  }

  obtenerLength(){
    let length = this.proyectos.length;
    return length;
  }

}
