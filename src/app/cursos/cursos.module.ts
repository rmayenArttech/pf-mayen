import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../services/cursos.service';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { InicioCursoComponent } from './inicio-curso/inicio-curso.component';



@NgModule({
  declarations: [
    ListaCursosComponent,
    CrearCursoComponent,
    InicioCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
