import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';

@Component({
  selector: 'app-css-pseudo-selectors',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent
  ],
  templateUrl: './css-pseudo-selectors.component.html',
  styleUrl: './css-pseudo-selectors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssPseudoSelectorsComponent {

}
