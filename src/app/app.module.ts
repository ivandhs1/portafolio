import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InicioComponent } from './Components/Pages/inicio/inicio.component';
import { ProyectosComponent } from './Components/Pages/proyectos/proyectos.component';
import { HeaderComponent } from './Components/SubComponents/header/header.component';
import { FooterComponent } from './Components/SubComponents/footer/footer.component';
import { ProyectoComponent } from './Components/Pages/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectosComponent,
    HeaderComponent,
    FooterComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
