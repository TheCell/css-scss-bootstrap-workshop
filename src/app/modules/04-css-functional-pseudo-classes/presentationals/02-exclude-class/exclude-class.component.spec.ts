import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeClassComponent } from './exclude-class.component';

describe('ExcludeClassComponent', () => {
  let component: ExcludeClassComponent;
  let fixture: ComponentFixture<ExcludeClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcludeClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcludeClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
