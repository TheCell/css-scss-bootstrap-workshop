import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePageLayoutComponent } from './exercise-page-layout.component';

describe('ExercisePageLayoutComponent', () => {
  let component: ExercisePageLayoutComponent;
  let fixture: ComponentFixture<ExercisePageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisePageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
