import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import {
  MatSnackBar, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Localcookie } from 'src/app/utils/localcookie';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  elegantForm: FormGroup;

  registrationForm: FormGroup;
  isSubmitted = false;
  action = true;
  setAutoHide = true;
  autoHide = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private formBuilder: FormBuilder, private service: LoginService, public snackBar: MatSnackBar, private router: Router, private localcookie: Localcookie) {

    this.elegantForm = formBuilder.group({
      elegantFormEmailEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['', Validators.required],
    });
  }
  login() {
    // this.service.loginUser(this.myForm.value.logindetails);
    this.service.loginUser(this.elegantForm.value).subscribe(
      res => {
        if (res.status === true) {
          this.open('Login Successful');
          this.localcookie.setLoginCookie(res);
          this.router.navigate(['/landing']);
        } else {
          this.open(res.message);
        }
      },
      err => {
        this.open('Something Error Occured');
      }
    );
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


