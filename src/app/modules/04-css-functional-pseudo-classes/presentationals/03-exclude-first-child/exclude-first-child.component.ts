import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exclude-first-child',
  standalone: true,
  imports: [],
  templateUrl: './exclude-first-child.component.html',
  styleUrl: './exclude-first-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcludeFirstChildComponent {

}
