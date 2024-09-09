import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedLinksComponent } from './visited-links.component';

describe('VisitedLinksComponent', () => {
  let component: VisitedLinksComponent;
  let fixture: ComponentFixture<VisitedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
