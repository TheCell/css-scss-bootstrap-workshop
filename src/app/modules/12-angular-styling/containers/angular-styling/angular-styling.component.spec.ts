import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStylingComponent } from './angular-styling.component';

describe('AngularStylingComponent', () => {
  let component: AngularStylingComponent;
  let fixture: ComponentFixture<AngularStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
