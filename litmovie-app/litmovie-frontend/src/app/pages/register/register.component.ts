import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup/signup.service';
import {
  MatSnackBar, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted = false;
  action = true;
  setAutoHide = true;
  autoHide = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private formBuilder: FormBuilder, private service: SignupService, public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      lastname: [''],
    });
  }
  get formControls() { return this.registrationForm.controls; }

  login() {
    this.service.signup(this.registrationForm.value).subscribe(
      res => {
        if (res.status === true) {
          this.open('Signup Successful');
        } else {
          this.open(res.message);
        }
      },
      err => {
        this.open('Something Error Occured');
      }
    );
    this.isSubmitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
  }
  open(message) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(
      message,
      null,
      config
    );
  }

}
