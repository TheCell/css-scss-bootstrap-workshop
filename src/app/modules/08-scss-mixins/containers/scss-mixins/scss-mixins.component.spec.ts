import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssMixinsComponent } from './scss-mixins.component';

describe('ScssMixinsComponent', () => {
  let component: ScssMixinsComponent;
  let fixture: ComponentFixture<ScssMixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssMixinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
