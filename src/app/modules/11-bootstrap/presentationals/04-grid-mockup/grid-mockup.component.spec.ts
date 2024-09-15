import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMockupComponent } from './grid-mockup.component';

describe('GridMockupComponent', () => {
  let component: GridMockupComponent;
  let fixture: ComponentFixture<GridMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridMockupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
