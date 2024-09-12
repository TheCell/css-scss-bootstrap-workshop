import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSiblingCombinatorComponent } from './next-sibling-combinator.component';

describe('NextSiblingCombinatorComponent', () => {
  let component: NextSiblingCombinatorComponent;
  let fixture: ComponentFixture<NextSiblingCombinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextSiblingCombinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextSiblingCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
