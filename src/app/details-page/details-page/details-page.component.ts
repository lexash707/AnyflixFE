import { Component } from '@angular/core';
import { DetailCardComponent } from '../../details/detail-card/detail-card.component';
import { CommentCardComponent } from '../../comment/comment-card/comment-card.component';
import { Movie } from '../../model/movie/movie';
import { DetailsService } from '../../services/details-service/details.service';
import { Details } from '../../model/details/details';
import { Review } from '../../model/review/review';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [DetailsPageComponent, CommentCardComponent, DetailCardComponent, CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  movie: Movie | undefined;
  reviews: Review[] = [];
  items$: Observable<Review[]> | undefined;

  constructor(private detailsService: DetailsService, private getRoute: ActivatedRoute) {}

  ngOnInit() {
    let id = this.getRoute.params.subscribe({
      next: (
        incomingId
      ) => {
        this.fetchMovie(incomingId['id']);
      }
    })
    
  }

  fetchMovie(id: number) {
    this.detailsService.getMovieById(id).subscribe({
      next: ({ movie, reviews }) => {
          this.movie = movie;
        this.reviews = reviews;
        this.items$ = of(reviews); 
      }})
    }

    newComment(mlkacs:any){
      this.fetchMovie(this.movie!.id);
    }
}
