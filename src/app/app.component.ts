import { Component, OnInit } from '@angular/core';
import { Curso } from './models/curso';
import { CursosService } from './services/cursos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SesionService } from './core/services/sesion.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PF-Mayen';

  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;

  constructor(private cursoService: CursosService, private router: Router,
    private sesion: SesionService,){}
  
  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
    //console.log("this.sesion$", this.sesion$)
  }
  
  
}
