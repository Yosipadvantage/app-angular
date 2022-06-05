import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserAuthService } from '../Services/user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class VigilatenteGuard implements CanActivate {

  constructor(private servicioHttp : UserAuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return true
  }



  
}
