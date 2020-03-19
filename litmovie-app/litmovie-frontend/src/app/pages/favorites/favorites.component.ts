import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { GetFavoritesServiceService } from '../../services/favorites/get-favorites-service.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  headElements = ['#', 'Title', 'Run Time', 'Action'];
  uuid: any
  data: any
  IMG_URL: any
  variable: any;


  constructor(private GetFavoritesServiceService: GetFavoritesServiceService) {


  }


  handleRemove(movieId) {
    //  when already a
    console.log(movieId)
    this.variable = {
      userFrom: window.localStorage.getItem('userId'),
      movieId: movieId

    }
    this.GetFavoritesServiceService.removefavortie(this.variable).subscribe((res) => {
      console.dir(res)
      if (res['success']) {
        this.fecthMovies({ uuid: this.uuid })
        alert(' removed from favorite')
      }
      else { alert('failed to remove from favorite') }


    })

  }
  fecthMovies(uuid) {
    this.GetFavoritesServiceService.getfavortieMovies(uuid).subscribe((res) => {
      if (res['success']) {

        this.data = res['favorites']
        console.log(this.data)
        this.IMG_URL = this.data['moviePost']
      }
      else {

        alert('Failed to get favorited video')
      }

    })


  }



  ngOnInit(): void {
    this.uuid = window.localStorage.getItem('userId')
    console.log(this.uuid)
    // this.fecthMovies(this.uuid)
    const uuid = { uuid: this.uuid }
    this.fecthMovies(uuid)


  }


}




