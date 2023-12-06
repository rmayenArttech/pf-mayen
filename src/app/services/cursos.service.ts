import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { 

  }

  getCursosList(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`);
  }

  newCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso);
  }

  updateCurso(id: string, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${env.apiURL}/cursos/${id}`, curso);
  }
}
