import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssFunctionsComponent } from './scss-functions.component';

describe('ScssFunctionsComponent', () => {
  let component: ScssFunctionsComponent;
  let fixture: ComponentFixture<ScssFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
