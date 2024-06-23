import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../../movie/movie-item/movie-item.component';
import { SeriesServiceService } from '../../services/series-service/series-service.service';
import { Movie } from '../../model/movie/movie';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [MovieItemComponent, CommonModule],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.css'
})
export class MovieGridComponent implements OnInit{
  // public items!: Observable<Movie[]>;
  public movies: Movie[] = [];

  constructor(private seriesService:SeriesServiceService){
  
  }

  ngOnInit(): void {
    this.seriesService.bs.subscribe({next: data => this.movies = data});
    this.seriesService.getAll();
    // this.seriesService.getFav();
  }

  
  
}
