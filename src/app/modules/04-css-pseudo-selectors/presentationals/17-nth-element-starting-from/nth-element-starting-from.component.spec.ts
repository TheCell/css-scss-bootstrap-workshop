import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthElementStartingFromComponent } from './nth-element-starting-from.component';

describe('NthElementStartingFromComponent', () => {
  let component: NthElementStartingFromComponent;
  let fixture: ComponentFixture<NthElementStartingFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NthElementStartingFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NthElementStartingFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
