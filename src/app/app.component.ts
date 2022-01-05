import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListaPersonaComponent } from './persona/lista-persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba';

  constructor(private router:Router){}

    Listar(){
      this.router.navigate(["Listar"])
    }
    Nuevo(){
      this.router.navigate(["Nuevo"])
    }
  }
