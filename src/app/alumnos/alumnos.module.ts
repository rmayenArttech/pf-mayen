import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { AlumnosService } from './services/alumnos.service';





@NgModule({
  declarations: [
    ListaAlumnosComponent,
    CrearAlumnoComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnosService
]
})
export class AlumnosModule { }