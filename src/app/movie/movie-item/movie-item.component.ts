import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']

})

export class MovieItemComponent implements OnInit {
  
  public movie!: Movie;

  constructor() {
  }

  ngOnInit() {
    this.movie = new Movie('Movie Title', 'https://i.imgur.com/Tia9a2X.jpeg');
  }
}
