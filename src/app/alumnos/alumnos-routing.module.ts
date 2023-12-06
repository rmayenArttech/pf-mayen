import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AdminGuard } from '../core/guards/admin.guard';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';



const routes: Routes = [
  { path: '', component: ListaAlumnosComponent, canActivateChild: [SesionGuard], children: [
    { path: 'listar', component: ListaAlumnosComponent },
    // { path: 'editar/:id', component: CrearAlumnoComponent, canActivate: [AdminGuard] },
    // { path: 'agregar', component: CrearAlumnoComponent, canActivate: [AdminGuard] },
    //{ path: 'edit/:id', component: CrearCursoComponent, canActivate: [AdminGuard] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }