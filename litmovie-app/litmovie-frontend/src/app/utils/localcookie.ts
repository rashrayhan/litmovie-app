import { Injectable } from '@angular/core';
import { Appconstant } from './appconstant';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class Localcookie {
  constructor(
    private appconstant: Appconstant,
    private cookieservice: CookieService
  ) {}

  setLoginCookie(loginCookie) {
    this.cookieservice.set(
      this.appconstant.logincookie,
      JSON.stringify(loginCookie)
    );
  }

  //returns {status:boolean,token:string,userId :userid}
  getLoginCookie(): Observable<any> {
    if (this.cookieservice.check(this.appconstant.logincookie) === false) {

      return null;

    } else {
      return JSON.parse(this.cookieservice.get(this.appconstant.logincookie));
    }
  }

  clearLoginCookie() {
    this.cookieservice.delete(this.appconstant.logincookie);
  }
}
