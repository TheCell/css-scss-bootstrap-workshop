import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-combinator',
  standalone: true,
  imports: [],
  templateUrl: './child-combinator.component.html',
  styleUrl: './child-combinator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildCombinatorComponent {

}
