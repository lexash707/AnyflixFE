import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Genre } from '../../model/genre/genre';
import { GenreService } from '../../services/genre-service/genre.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public items!: Observable<Genre[]>;

  constructor(private genreService:GenreService){
    
  }

  ngOnInit(): void {
    this.items = this.genreService.getAll();
  }

}
