import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialRefactoringComponent } from './partial-refactoring.component';

describe('PartialRefactoringComponent', () => {
  let component: PartialRefactoringComponent;
  let fixture: ComponentFixture<PartialRefactoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartialRefactoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialRefactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
