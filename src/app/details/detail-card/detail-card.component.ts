import { Component, Input } from '@angular/core';
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

  constructor(private detailsService:DetailsService){}

  onSubmit(form: any) {
    if (form.valid) {
      this.detailsService.saveReview(new Review(form.value.rating, form.value.review), this.movie.id);
    }
  }
}
