import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevoPersonaComponent } from './persona/nuevo-persona.component';

const routes: Routes = [
  {path: '', component: ListaPersonaComponent},
  {path:'Nuevo', component:NuevoPersonaComponent},
  {path:'Editar/:id', component:EditarPersonaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
