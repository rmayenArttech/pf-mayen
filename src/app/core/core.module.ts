import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NoEncontradoComponent,
    InicioComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    NoEncontradoComponent,
    InicioComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
