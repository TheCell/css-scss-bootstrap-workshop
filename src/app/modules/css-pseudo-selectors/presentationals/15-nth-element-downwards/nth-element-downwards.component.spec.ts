import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthElementDownwardsComponent } from './nth-element-downwards.component';

describe('NthElementDownwardsComponent', () => {
  let component: NthElementDownwardsComponent;
  let fixture: ComponentFixture<NthElementDownwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NthElementDownwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NthElementDownwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
