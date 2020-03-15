import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})


export class LandingComponent {

  constructor() { }

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 3, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 3, color: 'cyan'},
  ];

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
