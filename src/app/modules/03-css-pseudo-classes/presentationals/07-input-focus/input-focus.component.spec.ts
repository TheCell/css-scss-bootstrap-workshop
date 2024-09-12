import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFocusComponent } from './input-focus.component';

describe('InputFocusComponent', () => {
  let component: InputFocusComponent;
  let fixture: ComponentFixture<InputFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
