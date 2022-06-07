import { Component } from '@angular/core';
import { StateService } from './Services/state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private services : StateService){}
  ngOnInit(): void {
    this.services.authUser().subscribe((res)=>{

      if(res){
        this.services.stateUser(true)
      }else{
        this.services.stateUser(false)
      }
    })
  }

  title = 'app-animales';
}
