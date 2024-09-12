import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPseudoSelectorsComponent } from './css-pseudo-selectors.component';

describe('CssPseudoSelectorsComponent', () => {
  let component: CssPseudoSelectorsComponent;
  let fixture: ComponentFixture<CssPseudoSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPseudoSelectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPseudoSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
