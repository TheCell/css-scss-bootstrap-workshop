import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthElementUpwardsComponent } from './nth-element-upwards.component';

describe('NthElementUpwardsComponent', () => {
  let component: NthElementUpwardsComponent;
  let fixture: ComponentFixture<NthElementUpwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NthElementUpwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NthElementUpwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
