import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arbitrary-arguments',
  standalone: true,
  imports: [],
  templateUrl: './arbitrary-arguments.component.html',
  styleUrl: './arbitrary-arguments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArbitraryArgumentsComponent {

}
