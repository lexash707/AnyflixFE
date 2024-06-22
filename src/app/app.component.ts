import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AddSeriesFormComponent } from './add-series/add-series-form/add-series-form.component';
import { DetailCardComponent } from './details/detail-card/detail-card.component';
import { CommentCardComponent } from './comment/comment-card/comment-card.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page/details-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    MovieItemComponent, 
    LoginFormComponent, 
    AddSeriesFormComponent, 
    DetailCardComponent,
    CommentCardComponent,
    NavbarComponent,
    CommonModule,
    DetailsPageComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'AnyflixFE';
}
