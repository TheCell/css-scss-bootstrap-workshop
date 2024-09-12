import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLinkSuffixComponent } from './external-link-suffix.component';

describe('ExternalLinkSuffixComponent', () => {
  let component: ExternalLinkSuffixComponent;
  let fixture: ComponentFixture<ExternalLinkSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalLinkSuffixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalLinkSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
