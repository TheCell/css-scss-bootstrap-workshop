import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-decendant-combinator',
  standalone: true,
  imports: [],
  templateUrl: './decendant-combinator.component.html',
  styleUrl: './decendant-combinator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecendantCombinatorComponent {

}
