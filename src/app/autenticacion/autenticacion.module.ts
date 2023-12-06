import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionInicioComponent } from './autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './login/login.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AutenticacionInicioComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule
  ]
})
export class AutenticacionModule { }
