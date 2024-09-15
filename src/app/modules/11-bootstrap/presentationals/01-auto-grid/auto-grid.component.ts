import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auto-grid',
  standalone: true,
  imports: [],
  templateUrl: './auto-grid.component.html',
  styleUrl: './auto-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoGridComponent {

}
