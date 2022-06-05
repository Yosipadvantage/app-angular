import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable, tap } from 'rxjs';
import { valuesCredentials } from '../Interfaces/services.interfaces';

@Injectable({
  providedIn: 'root'
})


export class UserAuthService {

  
  constructor(private http:HttpClient) {

   }

   public registerUser(values:valuesCredentials): Observable<any>{
   return this.http.post("http://localhost:4000/api/register-user",{...values});
  }


  public authUser(token:string | null):Observable<object>{
    return this.http.post("http://localhost:4000/api/auth-user",{token});
  }
 
}
