import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_URL, API_KEY } from "../../config"
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { IMovie, IAppState } from '../../state/IAppState'
@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  localStorage = [];
  currentPage: number;
  merged = [];
  movieDetail;
  private url = 'http://localhost:4600/api/favorites/favoriteNumber';
  constructor(private http: HttpClient) { }


  fetchMovies(path) {
    this.http.get(path)
      .subscribe(data => {
        this.currentPage = data['page'];
        let tempo: [] = data['results'];
        this.localStorage = this.localStorage.concat(tempo);
        this.merged = this.localStorage;
        let temp1 = [];

      });
  }
  getOnlineData() {
    this.fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

  }

  handleClick() {

    this.fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.currentPage + 1}`)

  }

  getCachedData() {
    return this.localStorage;
  }

  getMovieDetail(movieId: String) {
    const path = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    return this.http.get(path);
  }


  getCastDetail(movieId: String) {
    const path = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return this.http.get(path);
  }

  getTrailerDetails(movieId: String) {
    const path = `${API_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    return this.http.get(path);
  }





}
