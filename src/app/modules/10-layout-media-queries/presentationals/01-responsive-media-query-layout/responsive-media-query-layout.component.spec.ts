import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveMediaQueryLayoutComponent } from './responsive-media-query-layout.component';

describe('ResponsiveMediaQueryLayoutComponent', () => {
  let component: ResponsiveMediaQueryLayoutComponent;
  let fixture: ComponentFixture<ResponsiveMediaQueryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveMediaQueryLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveMediaQueryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
