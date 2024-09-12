import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssVariablesNestingComponent } from './scss-variables-nesting.component';

describe('ScssVariablesNestingComponent', () => {
  let component: ScssVariablesNestingComponent;
  let fixture: ComponentFixture<ScssVariablesNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssVariablesNestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssVariablesNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
