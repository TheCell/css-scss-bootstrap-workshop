import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginCalculationComponent } from './margin-calculation.component';

describe('MarginCalculationComponent', () => {
  let component: MarginCalculationComponent;
  let fixture: ComponentFixture<MarginCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
