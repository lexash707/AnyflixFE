import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../model/movie/movie';
import { DetailsService } from '../../services/details-service/details.service';
import { Review } from '../../model/review/review';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  @Input()
  public movie!:Movie;

  @Output()
  public addedNew:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private detailsService:DetailsService){}

  onSubmit(form: any) {
    if (form.valid) {
      this.detailsService.saveReview(new Review(form.value.rating, form.value.review, localStorage.getItem('user')!), this.movie.id);
      this.addedNew.emit(true);
    }
  }
}
