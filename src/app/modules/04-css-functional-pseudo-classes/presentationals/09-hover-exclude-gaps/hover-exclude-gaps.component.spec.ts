import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverExcludeGapsComponent } from './hover-exclude-gaps.component';

describe('HoverExcludeGapsComponent', () => {
  let component: HoverExcludeGapsComponent;
  let fixture: ComponentFixture<HoverExcludeGapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverExcludeGapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverExcludeGapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
