import { Component, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from '../../services/get-movies.service';
import { GetFavoritesServiceService } from '../../services/favorites/get-favorites-service.service';
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
  comments: string; postComment = [];
  trailer: string;
  favNumber: number;
  favorited: any;
  variable: any;



  toggleActors() {
    this.actorsShow = !this.actorsShow;
  }

  post() {
    this.postComment.push(this.comments);
    this.comments = '';
  }

  constructor(private getMoviesServies: GetMoviesService, private route: ActivatedRoute, private GetFavoritesServiceService: GetFavoritesServiceService) {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieID'];
      // console.log('movie id', this.movieId);
    });
  }


  ngOnInit() {


    this.getMoviesServies.getMovieDetail(this.movieId).subscribe((data) => {
      //console.log('movie detail from init ', data);
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
      this.variable = {
        userFrom: window.localStorage.getItem('userId'),
        movieId: this.movieId,
        movieTitle: this.title,
        moviePost: this.IMG_URL,
        movieRunTime: this.runtime
      }

      this.GetFavoritesServiceService.getFavoriteNumber(this.variable).subscribe((res) => {

        if (res['success']) {
          // console.log(res.success)
          this.favNumber = res['subscribeNumber']
        }
        else { alert('failed to get fav number') }


      })

      this.GetFavoritesServiceService.getIsFavorited(this.variable).subscribe((res) => {
        console.dir(res)
        if (res['success']) {
          this.favorited = res['subcribed']
          console.log(this.favorited)
        }
        else { alert('failed to get info about favorited') }


      })

    });

    this.getMoviesServies.getCastDetail(this.movieId).subscribe((data2) => {
      this.casts = data2['cast'];
      // console.log('this.movie.cast', data2['cast']);
    });

    this.getMoviesServies.getTrailerDetails(this.movieId).subscribe((data3) => {
      this.trailer = `https://www.youtube.com/embed/${data3['videos']['results'][0]['key']}?autoplay=1?controls=1`;
      // this.trailer = data3['videos']['results'][0]['key'];
      console.log('tarilers', this.trailer);

    });
  }

  handleFavorite() {

    if (this.favorited) {
      // when already added
      this.GetFavoritesServiceService.removefavortie(this.variable).subscribe((res) => {
        console.dir(res)
        if (res['success']) {
          this.favorited = !this.favorited
          this.favNumber = this.favNumber - 1
          //   this.favorited = res.subcribed
          console.log(this.favorited)
        }
        else { alert('failed to remove from favorite') }


      })
    }
    else {
      // when not added
      this.GetFavoritesServiceService.addtofavortie(this.variable).subscribe((res) => {
        console.dir(res)
        if (res['success']) {
          this.favorited = !this.favorited
          this.favNumber = this.favNumber + 1
          //   this.favorited = res.subcribed
          console.log(this.favorited)
        }
        else { alert('failed to add to favorite') }


      })


    }
  }
}
