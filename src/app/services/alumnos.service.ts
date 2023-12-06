import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/environment/environment';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAlumnoList(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`);
  }

  newAlumno(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso);
  }

  updateAlumno(id: string, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${env.apiURL}/cursos/${id}`, curso);
  }
}
