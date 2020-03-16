import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_URL, API_KEY } from "../../config"
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {



  localStorage = [];

  constructor(private http: HttpClient) { }

  getOnlineData() {
    this.http.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`).subscribe(data => {
      //  console.dir(data)
      this.localStorage.push(data["results"]);
    });
  }

  getCachedData() {
    return from(this.localStorage);
  }
}
