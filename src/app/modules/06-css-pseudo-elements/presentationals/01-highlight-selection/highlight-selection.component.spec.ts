import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSelectionComponent } from './highlight-selection.component';

describe('HighlightSelectionComponent', () => {
  let component: HighlightSelectionComponent;
  let fixture: ComponentFixture<HighlightSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
