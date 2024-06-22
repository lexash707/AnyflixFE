import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-series-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-series-form.component.html',
  styleUrls: ['./add-series-form.component.css']
})
export class AddSeriesFormComponent implements OnInit {
  seriesForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.seriesForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      genre: [[], Validators.required],
      image: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.seriesForm.valid) {
      console.log(this.seriesForm.value);
    }
  }
}
