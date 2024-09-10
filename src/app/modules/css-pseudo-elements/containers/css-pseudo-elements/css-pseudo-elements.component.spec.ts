import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPseudoElementsComponent } from './css-pseudo-elements.component';

describe('CssPseudoElementsComponent', () => {
  let component: CssPseudoElementsComponent;
  let fixture: ComponentFixture<CssPseudoElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPseudoElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPseudoElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
