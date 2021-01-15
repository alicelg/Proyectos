import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'datos', component: DatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
