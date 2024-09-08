import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-descendant-combinator',
  standalone: true,
  imports: [],
  templateUrl: './descendant-combinator.component.html',
  styleUrl: './descendant-combinator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescendantCombinatorComponent {

}
