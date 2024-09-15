import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mixed-grid',
  standalone: true,
  imports: [],
  templateUrl: './mixed-grid.component.html',
  styleUrl: './mixed-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixedGridComponent {

}
