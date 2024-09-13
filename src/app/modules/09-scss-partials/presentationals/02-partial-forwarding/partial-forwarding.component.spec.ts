import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialForwardingComponent } from './partial-forwarding.component';

describe('PartialForwardingComponent', () => {
  let component: PartialForwardingComponent;
  let fixture: ComponentFixture<PartialForwardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartialForwardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialForwardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
