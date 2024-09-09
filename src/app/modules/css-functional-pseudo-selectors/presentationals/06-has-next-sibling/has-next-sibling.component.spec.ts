import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasNextSiblingComponent } from './has-next-sibling.component';

describe('HasNextSiblingComponent', () => {
  let component: HasNextSiblingComponent;
  let fixture: ComponentFixture<HasNextSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HasNextSiblingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasNextSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
