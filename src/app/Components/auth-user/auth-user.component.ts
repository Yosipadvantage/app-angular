import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';


@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {


  loginForm = new FormGroup({
    username:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])
  })


  constructor(private services:UserAuthService,private router:Router) { }
  ngOnInit(): void {

    /*
    this.loginForm.patchValue({
      username:"YosipParrado",
      email:"colinparrado@gmail.com"
    });

    */
  }


  //VALIDADORES
get usernameControl():FormControl{
  return this.loginForm.get("username")  as FormControl
}

get emailControl():FormControl{
  return this.loginForm.get("email") as FormControl
}

get passwordControl():FormControl{
  return this.loginForm.get("password") as FormControl;
}



  registerUser():void{
  const values = this.loginForm.value;
  this.services.registerUser(values).subscribe((res)=>{
    const {error,message,result} = res;
    if(error){
      alert(message)
    }else{
      localStorage.setItem("token",result);
      this.router.navigate(["/"])
      
    }
  
  });
  }
 

}
