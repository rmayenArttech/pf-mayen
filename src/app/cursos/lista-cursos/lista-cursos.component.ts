import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../services/cursos.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { selectorCargandoCursos, selectorCursosCargados } from 'src/app/core/slectors/cursos.selectors';
import { cargarCursos, cursosCargados } from 'src/app/core/actions/cursos.actions';
import { ActivatedRoute } from '@angular/router';
//import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  
  cursos: Curso[] = []
  curso!: Curso;
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;

  esAdmin!: boolean;
  constructor(private cursosService: CursosService, private sesion: SesionService,
    private dialog: MatDialog,
    
    private store: Store<AppState>){}
  
  ngOnInit(): void {
    this.cargando$ = this.store.select(selectorCargandoCursos);

    this.store.dispatch(cargarCursos());

    this.cursosService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({ cursos: cursos }));
    });
    
    this.cursos$ = this.store.select(selectorCursosCargados);
    this.sesion$ = this.sesion.obtenerSesion();
    this.cursos$.subscribe(cursos => {
      this.cursos = cursos;
    });  
    
    this.sesion$.subscribe(sesion => {
      if(sesion.usuarioActivo){
        this.esAdmin = sesion.usuarioActivo.esAdmin
      }
    });  
  }

  eliminarCurso(curso: Curso){
    this.cursosService.eliminarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursosService.obtenerCursos();
    });
  }

  // abrirDialog(curso: Curso){
  //   this.dialog.open(EditarCursoComponent, {
  //     data: curso
  //   }).afterClosed().subscribe((curso: Curso) => {
  //     alert(`${curso.nombre} editado satisfactoriamente`);
  //     this.cursos$ = this.cursosService.obtenerCursos();
  //   });
  // }


  setFormCurso(){

  }
}
