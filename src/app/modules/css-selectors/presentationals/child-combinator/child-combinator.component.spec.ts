import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCombinatorComponent } from './child-combinator.component';

describe('ChildCombinatorComponent', () => {
  let component: ChildCombinatorComponent;
  let fixture: ComponentFixture<ChildCombinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCombinatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
