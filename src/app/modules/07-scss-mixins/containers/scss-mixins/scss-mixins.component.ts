import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { TextOverflowComponent } from '../../presentationals/01-text-overflow/text-overflow.component';
import { TextOverflowArgsComponent } from '../../presentationals/02-text-overflow-args/text-overflow-args.component';
import { ContentMixinsComponent } from '../../presentationals/03-content-mixins/content-mixins.component';

@Component({
  selector: 'app-scss-mixins',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    TextOverflowComponent,
    TextOverflowArgsComponent,
    ContentMixinsComponent
  ],
  templateUrl: './scss-mixins.component.html',
  styleUrl: './scss-mixins.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScssMixinsComponent {

}
