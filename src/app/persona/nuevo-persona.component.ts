import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { Persona } from '../models/persona';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-persona',
  templateUrl: './nuevo-persona.component.html',
  styleUrls: ['./nuevo-persona.component.scss']
})
export class NuevoPersonaComponent implements OnInit {

  nombre = '';
  edad: number = 0;

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const persona = new Persona(this.nombre,this.edad);
    this.personaService.save(persona).subscribe(
      data => {
        this.toastr.success('Persona Agregada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
}
