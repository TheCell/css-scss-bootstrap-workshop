import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaQueryMixinsComponent } from './media-query-mixins.component';

describe('MediaQueryMixinsComponent', () => {
  let component: MediaQueryMixinsComponent;
  let fixture: ComponentFixture<MediaQueryMixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaQueryMixinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaQueryMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
