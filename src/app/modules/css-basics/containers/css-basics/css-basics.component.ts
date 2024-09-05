import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicSelectorsComponent } from '../../presentationals/basic-selectors/basic-selectors.component';
import { BoxModelComponent } from '../../presentationals/box-model/box-model.component';
import {
  PositionsScrollableComponent
} from '../../presentationals/positions-scrollable/positions-scrollable.component';
import { PositionsComponent } from '../../presentationals/positions/positions.component';

@Component({
  selector: 'app-css-basics',
  standalone: true,
  imports: [BoxModelComponent, BasicSelectorsComponent, PositionsComponent, PositionsScrollableComponent],
  templateUrl: './css-basics.component.html',
  styleUrl: './css-basics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssBasicsComponent {

}
