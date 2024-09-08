import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecendantCombinatorComponent } from './decendant-combinator.component';

describe('DecendantCombinatorComponent', () => {
  let component: DecendantCombinatorComponent;
  let fixture: ComponentFixture<DecendantCombinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecendantCombinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecendantCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
