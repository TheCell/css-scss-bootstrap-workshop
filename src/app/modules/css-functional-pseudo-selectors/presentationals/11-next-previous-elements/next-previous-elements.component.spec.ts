import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPreviousElementsComponent } from './next-previous-elements.component';

describe('NextPreviousElementsComponent', () => {
  let component: NextPreviousElementsComponent;
  let fixture: ComponentFixture<NextPreviousElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextPreviousElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextPreviousElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
