import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-letter',
  standalone: true,
  imports: [],
  templateUrl: './first-letter.component.html',
  styleUrl: './first-letter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstLetterComponent {

}
