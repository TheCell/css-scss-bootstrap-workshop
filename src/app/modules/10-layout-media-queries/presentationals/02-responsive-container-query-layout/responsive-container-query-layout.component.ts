import { DecimalPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-responsive-container-query-layout',
  standalone: true,
  imports: [
    JsonPipe,
    DecimalPipe
  ],
  templateUrl: './responsive-container-query-layout.component.html',
  styleUrl: './responsive-container-query-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveContainerQueryLayoutComponent {
  gridContainerEl = viewChild.required<ElementRef>('container');

  gridContainerWidth = signal(0);

  private readonly _observeContainerResize = effect(() => {
    const el = this.gridContainerEl();
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === el.nativeElement) {
          this.gridContainerWidth.set(entry.contentRect.width);
        }
      })
    });

    resizeObserver.observe(el.nativeElement);
  })
}
