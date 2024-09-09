import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFunctionalPseudoSelectorsComponent } from './css-functional-pseudo-selectors.component';

describe('CssFunctionalPseudoSelectorsComponent', () => {
  let component: CssFunctionalPseudoSelectorsComponent;
  let fixture: ComponentFixture<CssFunctionalPseudoSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssFunctionalPseudoSelectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssFunctionalPseudoSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
