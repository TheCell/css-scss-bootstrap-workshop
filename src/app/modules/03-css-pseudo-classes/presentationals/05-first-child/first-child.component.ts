import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstChildComponent {

}
