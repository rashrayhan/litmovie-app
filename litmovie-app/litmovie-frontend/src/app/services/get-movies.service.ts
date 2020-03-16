import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_URL, API_KEY } from "../../config"
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IMovie, IAppState } from '../../state/IAppState'
@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {



  localStorage = [];
  currentPage: number
  merged = [];
  constructor(private http: HttpClient) { }


  fetchMovies(path) {
    this.http.get(path)
      .subscribe(data => {

        this.currentPage = data['page']

        let tempo: [] = data['results'];
        console.log('hello', tempo)
        this.localStorage = [...this.localStorage, tempo]
        let temp1 = [];

        this.merged = [].concat.apply([], this.localStorage);
        console.log('l', this.localStorage, 'merged', this.merged)

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

  getMovieDetail(movieId: String) {

  }


}
