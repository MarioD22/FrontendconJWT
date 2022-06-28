import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { CrearCapacitacionComponent } from './components/crear-capacitacion/crear-capacitacion.component';
import { ListaCapacitacionComponent } from './components/lista-capacitacion/lista-capacitacion.component';
import { ActualizarCapacitacionComponent } from './components/actualizar-capacitacion/actualizar-capacitacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ActualizarHysComponent } from './components/actualizar-hys/actualizar-hys.component';
import { ActualizarPersonaComponent } from './components/actualizar-persona/actualizar-persona.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'lista-capacitacion',component:ListaCapacitacionComponent },
  {path:'lista-personas', component: ListaPersonasComponent},
  /*{path:'',redirectTo:'lista-capacitacion', pathMatch:'full' },*/
  {path:'crear-capacitacion', component:CrearCapacitacionComponent},
  {path: 'updatecapacitacion/:id', component:ActualizarCapacitacionComponent},
  {path:'updatehys/:id', component:ActualizarHysComponent},
  {path:'updateperfil/:id',component:ActualizarPersonaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})

export class AppRoutingModule { }
