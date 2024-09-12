import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hover-highlight',
  standalone: true,
  imports: [],
  templateUrl: './hover-highlight.component.html',
  styleUrl: './hover-highlight.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoverHighlightComponent {

}
