import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { HeaderComponent } from './Components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthUserComponent } from './Components/auth-user/auth-user.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticulosComponent,
    HeaderComponent,
    AuthUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
