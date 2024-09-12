import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoClassElementsComponent } from './no-class-elements.component';

describe('NoClassElementsComponent', () => {
  let component: NoClassElementsComponent;
  let fixture: ComponentFixture<NoClassElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoClassElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoClassElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
