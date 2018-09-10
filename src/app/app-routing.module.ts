import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Profile/:id",component:ProfileComponent}

  //,{path:'',component:AppComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,RegisterComponent,ProfileComponent]