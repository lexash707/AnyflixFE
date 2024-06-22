import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../model/movie/movie';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']

})

export class MovieItemComponent implements OnInit {
  
  @Input()
  public movie!: Movie;

  constructor() {
  }

  ngOnInit() {
    // this.movie = new Movie('Movie Title', 'https://i.imgur.com/Tia9a2X.jpeg');
  }
}
