import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { AutoGridComponent } from '../../presentationals/01-auto-grid/auto-grid.component';
import { BasicGridComponent } from '../../presentationals/02-basic-grid/basic-grid.component';
import { MixedGridComponent } from '../../presentationals/03-mixed-grid/mixed-grid.component';
import { GridMockupComponent } from '../../presentationals/04-grid-mockup/grid-mockup.component';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    AutoGridComponent,
    BasicGridComponent,
    MixedGridComponent,
    GridMockupComponent
  ],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapComponent {

}
