import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/api/v1/user/login';


  constructor(private httpclient: HttpClient) {}

  loginUser(body): Observable<any> {
    // const model = { email: body.email, password: body.password };
    // console.log(model);
  return  this.httpclient
      .post(this.url, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      });

  }
}
