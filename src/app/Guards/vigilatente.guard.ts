import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StateService } from '../Services/state.service';



@Injectable({
  providedIn: 'root'
})
export class VigilatenteGuard implements CanActivate {

  
  constructor(private servicio : StateService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return true
  }



  
}
