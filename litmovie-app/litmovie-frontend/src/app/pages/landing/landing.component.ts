import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { GetMoviesService } from '../../services/get-movies.service';
import {IMAGE_BASE_URL, } from '../../../config'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements AfterContentChecked {
  data: any;
  IMG_URL: any;

  constructor(private getMoviesServies: GetMoviesService) { }


  ngAfterContentChecked(): void {
    this.getMoviesServies.getCachedData().subscribe((data) => {
      this.data = data;
      this.IMG_URL = `${IMAGE_BASE_URL}w1280${this.data[0].backdrop_path}`;

      console.dir(this.data);
    });

  }



}
