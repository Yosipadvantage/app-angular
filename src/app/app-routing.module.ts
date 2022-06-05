import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { HomeComponent } from './Components/home/home.component';
import { VigilatenteGuard } from './Guards/vigilatente.guard';
import {AuthUserComponent} from "./Components/auth-user/auth-user.component"




const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"articulos",component:ArticulosComponent,canActivate:[VigilatenteGuard]},
  {path:"auth-user",component:AuthUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
