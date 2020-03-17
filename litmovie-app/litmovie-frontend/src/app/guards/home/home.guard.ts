import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { Appconstant } from 'src/app/utils/appconstant';
import { Localcookie } from 'src/app/utils/localcookie';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(
    private cookieservice: CookieService,
    private appconstant: Appconstant,
    private localCookie: Localcookie,
    public router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.cookieservice.check(this.appconstant.logincookie) === false
      && JSON.parse(this.cookieservice.get(this.appconstant.logincookie)).status === true){
        this.router.navigate(['home']);
        return true;
     }
      return true;
  }

}
