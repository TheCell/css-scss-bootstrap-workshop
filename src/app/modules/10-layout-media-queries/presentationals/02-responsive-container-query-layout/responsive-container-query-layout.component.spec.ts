import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveContainerQueryLayoutComponent } from './responsive-container-query-layout.component';

describe('ResponsiveContainerQueryLayoutComponent', () => {
  let component: ResponsiveContainerQueryLayoutComponent;
  let fixture: ComponentFixture<ResponsiveContainerQueryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveContainerQueryLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveContainerQueryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
