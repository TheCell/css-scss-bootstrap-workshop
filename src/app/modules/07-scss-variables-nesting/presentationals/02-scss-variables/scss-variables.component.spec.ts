import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssVariablesComponent } from './scss-variables.component';

describe('ScssVariablesComponent', () => {
  let component: ScssVariablesComponent;
  let fixture: ComponentFixture<ScssVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
