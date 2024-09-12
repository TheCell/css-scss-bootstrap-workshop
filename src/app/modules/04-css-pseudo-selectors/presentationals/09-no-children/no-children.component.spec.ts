import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChildrenComponent } from './no-children.component';

describe('NoChildrenComponent', () => {
  let component: NoChildrenComponent;
  let fixture: ComponentFixture<NoChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
