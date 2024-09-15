import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-grid',
  standalone: true,
  imports: [],
  templateUrl: './basic-grid.component.html',
  styleUrl: './basic-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicGridComponent {

}
