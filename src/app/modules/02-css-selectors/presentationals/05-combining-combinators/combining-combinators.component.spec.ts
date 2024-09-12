import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombiningCombinatorsComponent } from './combining-combinators.component';

describe('CombiningCombinatorsComponent', () => {
  let component: CombiningCombinatorsComponent;
  let fixture: ComponentFixture<CombiningCombinatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombiningCombinatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombiningCombinatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
