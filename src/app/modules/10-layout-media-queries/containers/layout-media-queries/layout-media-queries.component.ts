import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import {
  ResponsiveMediaQueryLayoutComponent
} from '../../presentationals/01-responsive-media-query-layout/responsive-media-query-layout.component';
import {
  ResponsiveContainerQueryLayoutComponent
} from '../../presentationals/02-responsive-container-query-layout/responsive-container-query-layout.component';
import { MediaQueryMixinsComponent } from '../../presentationals/03-media-query-mixins/media-query-mixins.component';

@Component({
  selector: 'app-layout-media-queries',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    ResponsiveMediaQueryLayoutComponent,
    ResponsiveContainerQueryLayoutComponent,
    MediaQueryMixinsComponent
  ],
  templateUrl: './layout-media-queries.component.html',
  styleUrl: './layout-media-queries.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMediaQueriesComponent {

}
