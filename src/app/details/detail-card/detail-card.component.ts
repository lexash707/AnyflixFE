import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Rating:', form.value.rating);
      console.log('Review:', form.value.review);
      // Handle form submission logic here
    }
  }
}
