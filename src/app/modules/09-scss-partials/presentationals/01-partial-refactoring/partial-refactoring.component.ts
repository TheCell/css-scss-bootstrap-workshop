import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-partial-refactoring',
  standalone: true,
  imports: [],
  templateUrl: './partial-refactoring.component.html',
  styleUrl: './partial-refactoring.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialRefactoringComponent {

}
