import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!:FormGroup;

constructor(private fb:FormBuilder,private http:HttpClient){}

ngOnInit(): void {
  this.registrationForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    gender:['',Validators.required],
    nationality:['',Validators.required],
    password:['',Validators.required]});
    }


onSubmit()
{
if (this.registrationForm.valid){
  const formData=this.registrationForm.value;

  this.http.post<any>('http://localhost:8096/register/signup',formData).subscribe(response=>{console.log('Registration Succesful',JSON.parse(response));});
}

}
}