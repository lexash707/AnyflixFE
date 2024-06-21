import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AnyflixFE';
}
