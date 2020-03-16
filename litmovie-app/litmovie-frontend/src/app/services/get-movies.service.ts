import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_URL, API_KEY } from "../../config"
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {



  localStorage = [];
  currentPage: number

  constructor(private http: HttpClient) { }


  fetchMovies(path) {
    this.http.get(path).subscribe(data => {
      //  console.dir(data)
      this.currentPage = data['page']
      this.localStorage.push(data["results"]);


    })
  }
  getOnlineData() {
    this.fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

  }

  handleClick() {
    this.fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.currentPage + 1}`)

  }

  getCachedData() {
    return from(this.localStorage);
  }
}
