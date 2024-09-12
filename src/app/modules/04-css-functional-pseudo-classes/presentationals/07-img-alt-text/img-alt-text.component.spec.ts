import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAltTextComponent } from './img-alt-text.component';

describe('ImgAltTextComponent', () => {
  let component: ImgAltTextComponent;
  let fixture: ComponentFixture<ImgAltTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgAltTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAltTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
