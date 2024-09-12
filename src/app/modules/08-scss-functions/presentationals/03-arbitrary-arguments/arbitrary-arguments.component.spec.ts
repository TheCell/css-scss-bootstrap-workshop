import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitraryArgumentsComponent } from './arbitrary-arguments.component';

describe('ArbitraryArgumentsComponent', () => {
  let component: ArbitraryArgumentsComponent;
  let fixture: ComponentFixture<ArbitraryArgumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitraryArgumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitraryArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
