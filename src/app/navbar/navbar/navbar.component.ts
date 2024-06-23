import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Genre } from '../../model/genre/genre';
import { GenreService } from '../../services/genre-service/genre.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SeriesServiceService } from '../../services/series-service/series-service.service';
import { AuthServiceService } from '../../services/login/auth-service.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public items: Genre[] = [];
  public selectedGenreId: number | null = null;
  public searchForm!: FormGroup;

  constructor(private genreService:GenreService, 
              private seriesService:SeriesServiceService, 
              public authService:AuthServiceService,
              public fb: FormBuilder){
    
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });
    this.genreService.getAll().subscribe({next: data => this.items = data});
  }

  search(){
    this.seriesService.getAll(this.searchForm.value.search ,this.selectedGenreId );
  }

  goHome(){
    this.searchForm.reset();
    this.selectedGenreId = null;
    this.seriesService.getAll(this.searchForm.value.search ,this.selectedGenreId );
  }
  favourites(){
    this.seriesService.getFav();
  }

  openReport(): void{
    this.genreService.openFileReport();
  }

  openReportS(): void{
    this.seriesService.openFileReport();
  }

  select(id:number){
    if(this.selectedGenreId == id)
      this.selectedGenreId = null;
    else this.selectedGenreId = id;
  }
  
}
