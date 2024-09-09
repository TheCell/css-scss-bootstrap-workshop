import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleElementComponent } from './multiple-element.component';

describe('MultipleElementComponent', () => {
  let component: MultipleElementComponent;
  let fixture: ComponentFixture<MultipleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
