import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent
  ],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapComponent {

}
