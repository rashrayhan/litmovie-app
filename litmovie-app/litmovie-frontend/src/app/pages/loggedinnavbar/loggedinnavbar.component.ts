import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedinnavbar',
  templateUrl: './loggedinnavbar.component.html',
  styleUrls: ['./loggedinnavbar.component.scss']
})
export class LoggedinnavbarComponent implements OnInit {

  constructor(private logoutService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout() {
    console.log('logout handler method')
    this.logoutService.logoutUser(window.localStorage.getItem('userId')).subscribe(res => {

      if (res['status'] === 200) {
        this.router.navigate(['/landing']);
      }
      else {
        alert('unable to logout')
      }
    })

  }

}
