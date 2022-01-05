import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient:HttpClient) { }

  URL= 'http://localhost:8080/persona/'

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `actualizar/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
