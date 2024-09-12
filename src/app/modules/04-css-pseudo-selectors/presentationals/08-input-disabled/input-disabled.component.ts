import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-disabled',
  standalone: true,
  imports: [],
  templateUrl: './input-disabled.component.html',
  styleUrl: './input-disabled.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDisabledComponent {

}
