import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData={
    name:'',
    email:'',
    gender:'',
    nationality:'',
    password:''
};
constructor(private http:HttpClient){}

onSubmit():void{
  this.http.post<any>('http://localhost:8096/register/signup',this.userData)
  .subscribe(response=>{console.log('Registration Succesful:',response);}
,error=>{console.error('Registration failed:',error);
});
}
}
