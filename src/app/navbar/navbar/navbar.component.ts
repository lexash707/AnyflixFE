import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Genre } from '../../model/genre/genre';
import { GenreService } from '../../services/genre-service/genre.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SeriesServiceService } from '../../services/series-service/series-service.service';
import { AuthServiceService } from '../../services/login/auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public items!: Observable<Genre[]>;

  constructor(private genreService:GenreService, private seriesService:SeriesServiceService, public authService:AuthServiceService){
    
  }

  ngOnInit(): void {
    this.items = this.genreService.getAll();
  }

  openReport(): void{
    this.genreService.openFileReport();
  }

  openReportS(): void{
    this.seriesService.openFileReport();
  }
  
}
