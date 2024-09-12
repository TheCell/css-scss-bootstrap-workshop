import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { MarginCalculationComponent } from '../../presentationals/01-margin-calculation/margin-calculation.component';
import { InputValidationComponent } from '../../presentationals/02-input-validation/input-validation.component';
import {
  ArbitraryArgumentsComponent
} from '../../presentationals/03-arbitrary-arguments/arbitrary-arguments.component';

@Component({
  selector: 'app-scss-functions',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    MarginCalculationComponent,
    InputValidationComponent,
    ArbitraryArgumentsComponent
  ],
  templateUrl: './scss-functions.component.html',
  styleUrl: './scss-functions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScssFunctionsComponent {

}
