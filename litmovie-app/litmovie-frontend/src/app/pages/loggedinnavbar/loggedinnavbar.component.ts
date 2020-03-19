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

      if (res['success']) {

        console.log('logout handler method success inside if')
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userId')
        this.router.navigate(['/login']);
      }
      else {
        alert(res['success'] + 'unable to logout')
      }
    })

  }

}
