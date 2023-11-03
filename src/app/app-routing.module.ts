import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/Pages/inicio/inicio.component';
import { ProyectosComponent } from './Components/Pages/proyectos/proyectos.component';
import { ProyectoComponent } from './Components/Pages/proyecto/proyecto.component';


const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "proyectos", component: ProyectosComponent},
  { path: "proyectos/:id", component: ProyectoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
