import { Component, Input } from '@angular/core';
import { Review } from '../../model/review/review';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css'
})
export class CommentCardComponent {
  @Input()
  public review!: Review;
}
