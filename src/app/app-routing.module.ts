import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PollutionComponent } from './pollution/pollution.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent},
    {path:'./registration/',component:RegistrationComponent},
  {path:'pollution',component:PollutionComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
