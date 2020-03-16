import { Component, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetMoviesService } from '../../services/get-movies.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movieId;
  movie;
  constructor(private getMoviesServies: GetMoviesService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieID'];
      console.log('movie id', this.movieId)
    })
  }


  ngOnInit() {


    this.getMoviesServies.getMovieDetail(this.movieId).subscribe((data) => {
      console.log('movie detail from init ', data)
      this.movie = data
    })
    // .subscribe((data) => {
    //   console.log('movie d ', data)
    //   this.movie = data
    // })






  }

}
