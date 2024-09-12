import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-focus',
  standalone: true,
  imports: [],
  templateUrl: './input-focus.component.html',
  styleUrl: './input-focus.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFocusComponent {

}
