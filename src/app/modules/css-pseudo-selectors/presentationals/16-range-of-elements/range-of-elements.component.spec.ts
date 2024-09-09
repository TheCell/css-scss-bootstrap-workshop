import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeOfElementsComponent } from './range-of-elements.component';

describe('RangeOfElementsComponent', () => {
  let component: RangeOfElementsComponent;
  let fixture: ComponentFixture<RangeOfElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeOfElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeOfElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
