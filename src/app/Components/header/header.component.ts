import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private services :StateService) { }

  stateUser = this.services.stateUser
  ngOnInit(): void {
    
  }

}
