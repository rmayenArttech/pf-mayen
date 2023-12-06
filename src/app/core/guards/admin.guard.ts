import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SesionService } from '../services/sesion.service';
import { Observable, map } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private sesion: SesionService,
    private router: Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if(sesion.usuarioActivo?.esAdmin){
          // console.log("sesion.usuarioActivo?.esAdmin", sesion.usuarioActivo?.esAdmin)
          return true;
        }else{
          alert('No tiene los permisos necesarios');
          this.router.navigate(['inicio']);
          return false;
        }
      })
    );
  }
  
}