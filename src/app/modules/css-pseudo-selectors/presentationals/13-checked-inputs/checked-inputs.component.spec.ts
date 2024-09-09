import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedInputsComponent } from './checked-inputs.component';

describe('CheckedInputsComponent', () => {
  let component: CheckedInputsComponent;
  let fixture: ComponentFixture<CheckedInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
