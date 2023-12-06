import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../services/cursos.service';
import { RouterModule, Routes } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { InicioCursoComponent } from './inicio-curso/inicio-curso.component';



const routes: Routes = [
  { path: '', component: InicioCursoComponent, canActivateChild: [SesionGuard], children: [
    { path: 'listar', component: ListaCursosComponent },
    { path: 'editar/:id', component: CrearCursoComponent, canActivate: [AdminGuard] },
    { path: 'agregar', component: CrearCursoComponent, canActivate: [AdminGuard] },
    //{ path: 'edit/:id', component: CrearCursoComponent, canActivate: [AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
