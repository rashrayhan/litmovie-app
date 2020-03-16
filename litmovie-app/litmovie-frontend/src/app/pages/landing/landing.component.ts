import { Component, OnInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { GetMoviesService } from '../../services/get-movies.service';
import { IMAGE_BASE_URL, } from '../../../config'
import { store } from '../../../store'
import { loadData } from '../../../actions/action'
import { from } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent implements AfterContentChecked, OnDestroy {
  data: any;
  data1: any;
  Unsubscribe;
  IMG_URL: any;
  IMG_URL_POSTER = `${IMAGE_BASE_URL}w500`;
  title: string;
  overview: string;

  constructor(private getMoviesServies: GetMoviesService) { }
  ngOnDestroy(): void {
    this.Unsubscribe();
  }
  // ngOnInit() {

  //  this.data1 = store.getState().data;
  //   this.Unsubscribe = store.subscribe(() => {
  //     this.data1 =store.getState().data;
  //     console.log(this.data1)
  //   })
  // }



  // ngAfterContentChecked(): void {
  //   this.getMoviesServies.getCachedData().subscribe((data) => {

  //     store.dispatch(loadData(data))

  //     this.IMG_URL = `${IMAGE_BASE_URL}w1280${this.data1[0].data[0].backdrop_path}`;
  //     console.dir(this.data1);
  //     console.log('here')
  //   });

  // }
  ngAfterContentChecked(): void {
    this.getMoviesServies.getCachedData().subscribe((data) => {
      console.dir('com', data)
      this.data = data;
      this.IMG_URL = `${IMAGE_BASE_URL}w1280${this.data[0].backdrop_path}`;
      this.title = this.data[0].title;
      this.overview = this.data[0].overview;
      console.dir(this.data);
      console.log('here');
    });

  }

  handleClick() {
    this.getMoviesServies.handleClick();
  }

}
