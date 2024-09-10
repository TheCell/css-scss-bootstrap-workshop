import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterComponent } from './first-letter.component';

describe('FirstLetterComponent', () => {
  let component: FirstLetterComponent;
  let fixture: ComponentFixture<FirstLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
