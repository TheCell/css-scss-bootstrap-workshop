import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalClassesComponent } from './conditional-classes.component';

describe('ConditionalClassesComponent', () => {
  let component: ConditionalClassesComponent;
  let fixture: ComponentFixture<ConditionalClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
