import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsequentSiblingCombinatorComponent } from './subsequent-sibling-combinator.component';

describe('NextSiblingCombinatorComponent', () => {
  let component: SubsequentSiblingCombinatorComponent;
  let fixture: ComponentFixture<SubsequentSiblingCombinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsequentSiblingCombinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsequentSiblingCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
