import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDisabledComponent } from './input-disabled.component';

describe('InputDisabledComponent', () => {
  let component: InputDisabledComponent;
  let fixture: ComponentFixture<InputDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDisabledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
