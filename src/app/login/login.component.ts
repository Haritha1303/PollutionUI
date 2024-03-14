import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  loginForm:FormGroup;
  
constructor (private formBuilder: FormBuilder,private router:Router,private authservice:AuthenticationService)
{
  this.loginForm=this.formBuilder.group({username:['',Validators.required],password:['',Validators.required],});

}

onSubmit():void
{
const usernameControl=this.loginForm.get('username')?.value;
const passwordControl=this.loginForm.get('password')?.value;
if(usernameControl&& passwordControl)
{
  const username=usernameControl.value;
  const password=passwordControl.value;


this.authservice.login({username,password})
.pipe(catchError((error)=>{console.error('Error occured during login:',error)
throw error;
}))
.subscribe((response)=>{console.log('LOGIN SUCCESSFUL',response);
const token = response;
if(response && token)
{
  localStorage.setItem('token',response.token);
  this.router.navigate(['../pollution/']);

}
  //console.warn(this.loginForm.value)
 // console.log("Form submitted")
 
});
}}}