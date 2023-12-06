import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../models/sesion';
import { Router } from '@angular/router';
import { SesionService } from '../core/services/sesion.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent implements OnInit{
  sesion$!: Observable<Sesion>;

  constructor(private router: Router, private sesion: SesionService) {}
  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  
  redigirInicio(){
    this.router.navigate(['inicio']);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
