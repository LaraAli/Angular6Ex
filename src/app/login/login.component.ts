import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public users=[]
public names=[]
public user
public id
  constructor(private userService : UserServiceService,private router:Router) { }

  ngOnInit() {this.user=null;
  }
  UserLogin(data){
this.users=this.userService.getUsers();
for(let n of this.users)
{//this.names.push(n.name)
if(n.name==data.Uname && n.password==data.Upass) {this.user=n; this.id=n.id;
  //alert(this.user.id + this.user.name)
   this.router.navigate(['/Profile',this.id]);
}

}
if( Object.is(this.user,null)) alert("login failed"); 
  }
}
