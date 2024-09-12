import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendantCombinatorComponent } from './descendant-combinator.component';

describe('DescendantCombinatorComponent', () => {
  let component: DescendantCombinatorComponent;
  let fixture: ComponentFixture<DescendantCombinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescendantCombinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescendantCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
