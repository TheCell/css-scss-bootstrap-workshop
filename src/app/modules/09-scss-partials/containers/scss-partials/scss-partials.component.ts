import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import {
  PartialRefactoringComponent
} from '../../presentationals/01-partial-refactoring/partial-refactoring.component';
import { PartialForwardingComponent } from '../../presentationals/02-partial-forwarding/partial-forwarding.component';

@Component({
  selector: 'app-scss-partials',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    PartialRefactoringComponent,
    PartialForwardingComponent
  ],
  templateUrl: './scss-partials.component.html',
  styleUrl: './scss-partials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScssPartialsComponent {

}
