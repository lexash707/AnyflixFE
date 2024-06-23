import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Movie } from '../../model/movie/movie';
import { DetailsService } from '../../services/details-service/details.service';
import { Review } from '../../model/review/review';
import { Paths } from '../../../api/paths';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  @Input()
  public movie!:Movie;

  @Output()
  public addedNew:EventEmitter<boolean> = new EventEmitter<boolean>();

  detailsForm!: FormGroup;

  constructor(public detailsService:DetailsService,private http:HttpClient, private fb:FormBuilder){
    this.detailsForm = this.fb.group({
      rating: ['', [Validators.required, Validators.max(10), Validators.min(1)]],
      review: ['', [Validators.required]]
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.detailsService.saveReview(new Review(form.value.rating, form.value.review, localStorage.getItem('user')!), this.movie.id);
      this.addedNew.emit(true);
    }
  }

  addFav(idSeries:number){
    return this.http.post(Paths.paths.favourite, {idSerije: idSeries}).subscribe();
  }


  
}
