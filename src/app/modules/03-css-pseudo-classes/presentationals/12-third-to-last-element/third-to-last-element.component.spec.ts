import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdToLastElementComponent } from './third-to-last-element.component';

describe('ThirdToLastElementComponent', () => {
  let component: ThirdToLastElementComponent;
  let fixture: ComponentFixture<ThirdToLastElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdToLastElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdToLastElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
