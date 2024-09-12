import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenListItemsComponent } from './even-list-items.component';

describe('EvenListItemsComponent', () => {
  let component: EvenListItemsComponent;
  let fixture: ComponentFixture<EvenListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenListItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
