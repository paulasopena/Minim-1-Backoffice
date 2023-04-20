import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state-service.service';
import { State } from 'src/app/models/state';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service.service';

@Component({
  selector: 'app-allstates',
  templateUrl: './allstates.component.html',
  styleUrls: ['./allstates.component.css']
})
export class AllstatesComponent implements OnInit{
  states: State [] = [];
  constructor( private _stateService: StateService, private _router: Router, private dialogService: DialogService) { }
  ngOnInit(): void {
    this.getAllStates();
  }
  getAllStates(){
    this._stateService.getTheStates().subscribe(data => {
      this.states = data;
    }, error => {
      console.log(error);
    })
  }


  

 
 
  


}
