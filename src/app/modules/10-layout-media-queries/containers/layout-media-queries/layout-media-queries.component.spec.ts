import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMediaQueriesComponent } from './layout-media-queries.component';

describe('LayoutMediaQueriesComponent', () => {
  let component: LayoutMediaQueriesComponent;
  let fixture: ComponentFixture<LayoutMediaQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMediaQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMediaQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
