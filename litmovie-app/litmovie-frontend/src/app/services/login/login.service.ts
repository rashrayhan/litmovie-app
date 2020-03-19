import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:4600/api/users';


  constructor(private httpclient: HttpClient) { }

  loginUser(body): Observable<any> {
    // const model = { email: body.email, password: body.password };
    // console.log(model);
    return this.httpclient
      .post(this.url + '/login', body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      });

  }
  wind

  logoutUser(userId) {
    console.log('logout handler service')
    return this.httpclient
      .get(this.url + `/logout/${userId}`)


  }
  loggedIn() {
    return !!window.localStorage.getItem('token')

  }
}
