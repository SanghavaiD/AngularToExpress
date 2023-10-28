import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { BackendAccessService } from '../backend-access.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent {
  title = 'reactiveforms';
  userList : any =[];
  expresponse:string='';
  constructor(private http : HttpClient , private baccess:BackendAccessService)
  {

  }
  addUser(uData:any)
  {
      console.log(this.userForm.value);
      this.expresponse = this.baccess.addUser(uData);
  }
  getAllUser()
  {
   this.userList=this.baccess.getAllUser();

  }
  userForm :any = new FormGroup({
    firstName : new FormControl
      ('Sanghavai' , [Validators.minLength(5) , Validators.maxLength(50) , Validators.required ]),
    lastName : new FormControl
      ('Bhuvaneswari' , [Validators.minLength(5) , Validators.maxLength(50) , Validators.required ]),
    emailid : new FormControl
      ('Enter email Id',[Validators.required]),
    address : new FormControl
      ('Enter Address' ,[Validators.required]),
    phoneno : new FormControl
      ('+91' , [Validators.min(10) , Validators.max(12) , Validators.required])
  },
  {
    updateOn:'change'
  }
  );
  /*
  updateUser(firstName: string,udata: any): any {
    return this.http.put('http://localhost:3002/update',udata.value).subscribe((res) => {
      this.expresponse = res.toString();
      console.log(udata);
    });
    console.log('data updated');
    return this.expresponse;
  }
 
  deleteUser(firstName: string,udata: any): any {
    return this.http.delete('http://localhost:3002/delete',udata.value).subscribe((res) => {
      this.expresponse = res.toString();
      console.log('User deleted');
    });
    console.log('data deleted');
    return this.expresponse;
  }
   <input type="button" value="Update User" (click)="updateUser()"/>
    <input type="button" value="Delete User" (click)="deleteUser()"/>
  */
}
