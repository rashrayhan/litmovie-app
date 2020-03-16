import { Component } from '@angular/core';
import { GetMoviesService } from './services/get-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lit Movie';

  constructor(private getMoviesServies: GetMoviesService) { }

  ngOnInit() {
    this.getMoviesServies.getOnlineData();
  }


}
