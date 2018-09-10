import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public user;
public Uid;
public hide: boolean
  constructor(private route :ActivatedRoute,private userService : UserServiceService) { }

  ngOnInit() {
    this.hide=false
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.Uid=id;
      this.user=this.userService.getUserByID(this.Uid);
     // alert(this.user.id +" "+this.user.name+" "+this.user.password+" "+this.user.email);
     });
  }

  
  Save(data){
let  modUser=this.user
modUser.id=this.Uid;
modUser.name=data.Uname
modUser.Fname=data.Ufname
modUser.Lname=data.Ulname
modUser.password=data.Upass
modUser.email=data.Uemail
modUser.phone=data.Uphone
this.userService.EditProfile(modUser);
this.hide=false;


  }

}
