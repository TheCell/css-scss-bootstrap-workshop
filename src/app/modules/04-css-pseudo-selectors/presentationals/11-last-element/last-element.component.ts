import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-last-element',
  standalone: true,
  imports: [],
  templateUrl: './last-element.component.html',
  styleUrl: './last-element.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastElementComponent {

}
