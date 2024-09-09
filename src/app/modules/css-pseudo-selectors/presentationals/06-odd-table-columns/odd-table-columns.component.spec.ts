import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddTableColumnsComponent } from './odd-table-columns.component';

describe('OddTableColumnsComponent', () => {
  let component: OddTableColumnsComponent;
  let fixture: ComponentFixture<OddTableColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OddTableColumnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddTableColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
