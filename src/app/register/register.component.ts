import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public formdata
  constructor(private userService: UserServiceService, private router :Router) { }

  ngOnInit() {
   
  }
Reg(data){
  let id=this.userService.getLastID()+1;
  let newUser={ 'id':id,
              'name':data.Uname,
              'Fname':data.Ufname,
              'Lname':data.Ulname,
              'password':data.Upass,
              'email':data.Uemail,
              'phone':data.Uphone}
  this.userService.AddUser(newUser);
  this.router.navigate(['/Profile',id]);
}
}
