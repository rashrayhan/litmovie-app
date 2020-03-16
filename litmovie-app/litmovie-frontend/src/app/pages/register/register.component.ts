import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup; 
  isSubmitted  =  false; 
  constructor(private formBuilder: FormBuilder) { }
ngOnInit(){
  this.registrationForm = this.formBuilder.group({
    Name: [''],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    LastName: [''],
  });
}
get formControls() { return this.registrationForm.controls; }

login(){
  console.log(this.registrationForm.value);
  this.isSubmitted = true;
  if(this.registrationForm.invalid){
    return;
  }
}
}
