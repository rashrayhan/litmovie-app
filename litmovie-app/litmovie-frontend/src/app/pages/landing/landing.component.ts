import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { GetMoviesService } from '../../services/get-movies.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements AfterContentChecked {
  data: [];
  constructor(private getMoviesServies: GetMoviesService) { }


  ngAfterContentChecked(): void {
    this.getMoviesServies.getCachedData().subscribe((data) => {
      this.data = data
      console.dir(this.data);
    });

  }



}