import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { BoxModelComponent } from '../../presentationals/01-box-model/box-model.component';
import { BasicSelectorsComponent } from '../../presentationals/02-basic-selectors/basic-selectors.component';
import { PositionsComponent } from '../../presentationals/03-positions/positions.component';
import {
  PositionsScrollableComponent
} from '../../presentationals/04-positions-scrollable/positions-scrollable.component';

@Component({
  selector: 'app-css-basics',
  standalone: true,
  imports: [BoxModelComponent, BasicSelectorsComponent, PositionsComponent, PositionsScrollableComponent, ExercisePageLayoutComponent],
  templateUrl: './css-basics.component.html',
  styleUrl: './css-basics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssBasicsComponent {

}
