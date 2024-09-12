import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsScrollableComponent } from './positions-scrollable.component';

describe('PositionsScrollableComponent', () => {
  let component: PositionsScrollableComponent;
  let fixture: ComponentFixture<PositionsScrollableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionsScrollableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionsScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
