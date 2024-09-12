import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverflowArgsComponent } from './text-overflow-args.component';

describe('TextOverflowArgsComponent', () => {
  let component: TextOverflowArgsComponent;
  let fixture: ComponentFixture<TextOverflowArgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextOverflowArgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextOverflowArgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
