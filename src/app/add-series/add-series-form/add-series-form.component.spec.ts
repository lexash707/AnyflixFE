import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeriesFormComponent } from './add-series-form.component';

describe('AddSeriesFormComponent', () => {
  let component: AddSeriesFormComponent;
  let fixture: ComponentFixture<AddSeriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSeriesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSeriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
