import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog-service.service';
import { State } from 'src/app/models/state';
import { StateService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit{
  form: FormGroup;

  idUser: any;
  actualDate: Date=new Date();
  stateData: State = { indicator: "offline", available: 0, last_updated: this.actualDate};
  showMessage = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private _fb: FormBuilder, 
    private _router: Router, private dialogService: DialogService, private stateService: StateService) {
    this.form = this._fb.group({
      "indicator": ['', Validators.required],
      "available": ['', Validators.required],
      "last_updated": ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    console.log(this.idUser);
    this.getStateData();
  }

  getStateData(): void {
    this.userService.getStates(this.idUser).subscribe(
      (data: User) => {
        if(this.isState(data)===true){
          this.form.patchValue({
            indicator: this.stateData.indicator,
            available: this.stateData.available,
            last_updated: this.stateData.last_updated
          });
        }
        else{
          console.log("BAD_POPULATE");
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  isState(user:User):boolean {
    if (typeof user.state === 'string') {
      return(false);
    } else {
      this.stateData = user.state;
      return(true);
    }

  }
  
  editState():void{

    
    this.stateService.updateState(this.stateData._id,this.form.value).subscribe(data =>{
      this._router.navigate(['/users']);            
    }, error => {
      console.log(error);
    })
    
    
  }


}
