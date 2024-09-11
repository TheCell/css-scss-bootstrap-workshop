import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { NestingComponent } from '../../presentationals/01-nesting/nesting.component';
import { ScssVariablesComponent } from '../../presentationals/02-scss-variables/scss-variables.component';
import { ThemingComponent } from '../../presentationals/03-theming/theming.component';

@Component({
  selector: 'app-scss-variables-nesting',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    NestingComponent,
    ScssVariablesComponent,
    ThemingComponent
  ],
  templateUrl: './scss-variables-nesting.component.html',
  styleUrl: './scss-variables-nesting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScssVariablesNestingComponent {

}
