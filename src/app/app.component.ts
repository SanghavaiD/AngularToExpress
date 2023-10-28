import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BackendAccessService } from './backend-access.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// This code is placed in home..
export class AppComponent {
  title = 'templateforms';
  userList : any =[];
  //data:any;
  expresponse:string='';

  constructor(private http : HttpClient , private baccess:BackendAccessService)
  {

  }
  getAllUsers(){
   this.userList=this.baccess.getAllUsers();
  }

  addUser(uData : any){
    this.expresponse = this.baccess.addUser(uData);
  }
}
