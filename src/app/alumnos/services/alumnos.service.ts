import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${env.apiURL}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  editarAlumno(alumno: Alumno): Observable<Alumno>{
    // console.log("id", alumno)
    return this.http.put<Alumno>(`${env.apiURL}/alumnos/${alumno.id}`, alumno, {
      headers: new HttpHeaders({
        'usuario': 'Abner'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno>{

    // console.log("alumno", alumno)
    return this.http.post<Alumno>(`${env.apiURL}/alumnos`, alumno, {
      headers: new HttpHeaders({
        'usuario': 'Abner'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  eliminarAlumno(id: string): Observable<Alumno>{
    return this.http.delete<Alumno>(`${env.apiURL}/alumnos/${id}`, {
      headers: new HttpHeaders({
        'curso': 'Angular'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }
}
