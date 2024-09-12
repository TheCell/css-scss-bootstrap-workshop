import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeFirstChildComponent } from './exclude-first-child.component';

describe('ExcludeFirstChildComponent', () => {
  let component: ExcludeFirstChildComponent;
  let fixture: ComponentFixture<ExcludeFirstChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcludeFirstChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcludeFirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
