import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionInicioComponent } from './autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AutenticacionInicioComponent, children: [ // auth
    {path: 'login', component: LoginComponent} // auth/login
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
