import { Component, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from '../../services/get-movies.service';
import { IMAGE_BASE_URL, } from '../../../config';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  actorsShow = true;
  data: any;
  Unsubscribe;
  IMG_URL: any;
  IMG_URL_CREW = `${IMAGE_BASE_URL}w500`;
  movieID: number;
  movieId; movie; casts: any;
  title; overview; releaseDate; runtime; revenue; status; popularity;
  voteCount; voteAverage;


  toggleActors() {
    this.actorsShow = !this.actorsShow;
  }

  constructor(private getMoviesServies: GetMoviesService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieID'];
      // console.log('movie id', this.movieId);
    });
  }


  ngOnInit() {


    this.getMoviesServies.getMovieDetail(this.movieId).subscribe((data) => {
      console.log('movie detail from init ', data);
      this.movie = data;
      console.log('this.movie', this.movie);
      this.IMG_URL = `${IMAGE_BASE_URL}w1280${this.movie.backdrop_path}`;
      this.title = this.movie.title;
      this.overview = this.movie.overview;
      this.releaseDate = this.movie.release_date;
      this.revenue = this.movie.revenue;
      this.runtime = this.movie.runtime;
      this.status = this.movie.status;
      this.popularity = this.movie.popularity;
      this.voteCount = this.movie.vote_count;
      this.voteAverage = this.movie.vote_average;
    });

    this.getMoviesServies.getCastDetail(this.movieId).subscribe((data2) => {
      this.casts = data2['cast'];
      // console.log('this.movie.cast', data2['cast']);
    });
  }

  handleFavorite() {


  }
}



