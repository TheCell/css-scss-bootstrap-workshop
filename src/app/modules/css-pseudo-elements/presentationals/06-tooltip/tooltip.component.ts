import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {

}
