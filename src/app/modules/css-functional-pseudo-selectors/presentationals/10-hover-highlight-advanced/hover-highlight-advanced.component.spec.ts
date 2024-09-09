import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverHighlightAdvancedComponent } from './hover-highlight-advanced.component';

describe('HoverHighlightAdvancedComponent', () => {
  let component: HoverHighlightAdvancedComponent;
  let fixture: ComponentFixture<HoverHighlightAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverHighlightAdvancedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverHighlightAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
