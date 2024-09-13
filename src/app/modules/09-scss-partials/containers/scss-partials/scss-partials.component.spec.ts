import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssPartialsComponent } from './scss-partials.component';

describe('ScssPartialsComponent', () => {
  let component: ScssPartialsComponent;
  let fixture: ComponentFixture<ScssPartialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssPartialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssPartialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
