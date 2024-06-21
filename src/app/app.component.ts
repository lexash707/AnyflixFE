import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieItemComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AnyflixFE';
}
