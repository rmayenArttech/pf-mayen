import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { SesionGuard } from './core/guards/sesion.guard';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';


const routes: Routes = [
  {path: '', component: InicioComponent, canActivate: [SesionGuard]},
  {
    path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'alumnos', 
    loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
