import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryNthListItemComponent } from './every-nth-list-item.component';

describe('EveryNthListItemComponent', () => {
  let component: EveryNthListItemComponent;
  let fixture: ComponentFixture<EveryNthListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveryNthListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EveryNthListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
