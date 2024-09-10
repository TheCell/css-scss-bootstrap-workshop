import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerHighlightComponent } from './marker-highlight.component';

describe('MarkerHighlightComponent', () => {
  let component: MarkerHighlightComponent;
  let fixture: ComponentFixture<MarkerHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkerHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkerHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
