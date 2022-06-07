import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {



  constructor(private http:HttpClient) { }


authUser():Observable<object>{
return this.http.post("http://localhost:4000/api/auth-user",{token:localStorage.getItem("token")});
}

 stateUser(state:boolean){
  return state;
 }
}
