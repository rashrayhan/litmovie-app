import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required, EmailValidator],
    license: ['', Validators.required],
    ssn: [''],
    dob: ['', Validators.required],
    address: this.fb.group({
      zipcode: ['', Validators.required],
      mail_box: ['', Validators.required],
      street: ['', Validators.required],
      house_no: ['', Validators.required]
    }),
  });
  constructor(private fb: FormBuilder) { }

}
