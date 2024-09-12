import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSelectorsComponent } from './basic-selectors.component';

describe('BasicSelectorsComponent', () => {
  let component: BasicSelectorsComponent;
  let fixture: ComponentFixture<BasicSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSelectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
