import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Genre } from '../../model/genre/genre';
import { GenreService } from '../../services/genre-service/genre.service';
import { AddSeriesService } from '../../services/add-series/add-series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-series-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-series-form.component.html',
  styleUrls: ['./add-series-form.component.css']
})
export class AddSeriesFormComponent implements OnInit {
  seriesForm!: FormGroup;
  public items!: Observable<Genre[]>;
  file: File | null = null;

  constructor(private fb: FormBuilder,
             private genreService:GenreService, 
             private addSeriesService:AddSeriesService,
             private router:Router) {}

  ngOnInit(): void {
    this.seriesForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      genre: [[], Validators.required],
      image: [null, Validators.required]
    });

    this.items = this.genreService.getAll();
  }

  onSubmit(): void {
    if (this.seriesForm.valid) {
      console.log(this.seriesForm.value);
      this.addSeriesService.saveSeries(this.seriesForm.value.title, 
                                      this.seriesForm.value.description,
                                      this.file,
                                      this.seriesForm.value.genre,
                                      this.file!.name)
    }
  }

  onFilechange(event:any){
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

}
