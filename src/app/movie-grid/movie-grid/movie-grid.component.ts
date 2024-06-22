import { Component } from '@angular/core';
import { MovieItemComponent } from '../../movie/movie-item/movie-item.component';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.css'
})
export class MovieGridComponent {

}
