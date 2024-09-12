import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMixinsComponent } from './content-mixins.component';

describe('ContentMixinsComponent', () => {
  let component: ContentMixinsComponent;
  let fixture: ComponentFixture<ContentMixinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMixinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMixinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
