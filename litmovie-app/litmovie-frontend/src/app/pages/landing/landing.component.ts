import { Component, OnInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { GetMoviesService } from '../../services/get-movies.service';
import { IMAGE_BASE_URL, } from '../../../config';
import { store } from '../../../store';
import { loadData } from '../../../actions/action';
import { from } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements AfterContentChecked {
  data: any;
  data1: any;
  Unsubscribe;
  IMG_URL: any;
  IMG_URL_POSTER = `${IMAGE_BASE_URL}w500`;
  movieID: number;
  title: string;
  overview: string;
  uuid: string;


  constructor(private getMoviesServies: GetMoviesService) { }

  ngAfterContentChecked(): void {
    this.data = this.getMoviesServies.getCachedData()

    let img = this.data[3].backdrop_path;
    this.IMG_URL = `${IMAGE_BASE_URL}w1280${img}`;
    this.movieID = this.data[3].id;
    this.title = this.data[3].title;
    this.overview = this.data[3].overview;


    this.uuid = window.localStorage.getItem('userId');
    console.log('uuid', this.uuid);

  }

  handleClick() {
    this.getMoviesServies.handleClick();
  }




}
