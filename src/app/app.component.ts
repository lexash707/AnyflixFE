import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AddSeriesFormComponent } from './add-series/add-series-form/add-series-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieItemComponent, FormsModule, LoginFormComponent, AddSeriesFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AnyflixFE';
}
