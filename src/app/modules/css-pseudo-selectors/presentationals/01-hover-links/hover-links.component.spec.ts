import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverLinksComponent } from './hover-links.component';

describe('HoverLinksComponent', () => {
  let component: HoverLinksComponent;
  let fixture: ComponentFixture<HoverLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
