import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  headElements = ['#', 'Title', 'Release Date', 'Action'];
  data: [];
  constructor() { }

  ngOnInit(): void {
  }

  handleRemove(){}

}
