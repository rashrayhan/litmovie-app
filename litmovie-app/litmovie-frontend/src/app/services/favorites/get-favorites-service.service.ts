import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFavoritesServiceService {
  private url = 'http://localhost:4600/api/favorites';
  constructor(private http: HttpClient) { }
  getFavoriteNumber(variable: any) {
    return this.http
      .post(this.url + '/favoriteNumber', variable, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      });

  }

  getIsFavorited(variable: any) {
    return this.http
      .post(this.url + '/favorited', variable, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      });

  }

}
