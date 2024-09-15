import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { HostSelectorComponent } from '../../presentationals/01-host-selector/host-selector.component';
import {
  ConditionalClassesComponent
} from '../../presentationals/02-conditional-classes/conditional-classes.component';
import { LayoutComponentComponent } from '../../presentationals/03-layout-component/layout-component.component';

@Component({
  selector: 'app-angular-styling',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    HostSelectorComponent,
    ConditionalClassesComponent,
    LayoutComponentComponent
  ],
  templateUrl: './angular-styling.component.html',
  styleUrl: './angular-styling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularStylingComponent {

}
