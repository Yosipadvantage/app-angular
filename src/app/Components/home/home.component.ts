import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: UserAuthService,private router:Router) { }

  ngOnInit(): void {

    const token = localStorage.getItem("token");
    this.http.authUser(token).subscribe((res)=>{
      if(!res){

        this.router.navigate(["/auth-user"])
      }
    })
  }

}
