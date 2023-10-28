import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any =[];
  data:any;
  expresponse:string='';
  constructor(private http : HttpClient)
  {

  }
  getAllUsers():[any]{
  {
    this.http.get('http://localhost:3000/getAll').subscribe
    ((response) => {this.userList=response; 
      console.log(this.userList)});
  };
  return this.userList;
}

  addUsers(uData : any) :any
  {
    this.http.post('http://localhost:3000/insert',uData.value).
    subscribe((response) =>
    {this.expresponse = response.toString(); console.log(uData.value);});
    console.log('data added');
    return this.expresponse;

  };
  addUser(uData : any) :any
  {
    this.http.post('http://localhost:3000/insertUser',uData.value).
    subscribe((response) =>
    {this.expresponse = response.toString(); console.log(uData.value);});
    console.log('data added');
    return this.expresponse;

  };
  getAllUser():[any]{
    {
      this.http.get('http://localhost:3000/getAllUser').subscribe
      ((response) => {this.userList=response; 
        console.log(this.userList)});
    };
    return this.userList;
  }
}

