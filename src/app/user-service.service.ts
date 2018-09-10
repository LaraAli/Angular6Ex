import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public Users=[
    {"id":1,"name":"lara","Fname":"lara","Lname":"ali","password":"12345","email":"lara@hotmail.com","phone":1234567},
    {"id":2,"name":"Bob","Fname":"Bob","Lname":"Bob","password":"12345","email":"Bob@hotmail.com","phone":1000067},
    {"id":3,"name":"Alis","Fname":"Alis","Lname":"Alis","password":"12345","email":"Alis@hotmail.com","phone":3214567}
    ]
  constructor() { }
  getUsers(){return this.Users;}
  getUserByID(id:number){for(let n of this.Users)
  if(n.id == id)
return n;}
 
EditProfile(data){
  this.Users.push(data); 
  
}
getLastID(){
  return  this.Users.length;

}
AddUser(data){
  
  this.Users.push(data);}
}
