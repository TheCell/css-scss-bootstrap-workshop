import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import { ChildCombinatorComponent } from '../../presentationals/child-combinator/child-combinator.component';
import {
  CombiningCombinatorsComponent
} from '../../presentationals/combining-combinators/combining-combinators.component';
import {
  DescendantCombinatorComponent
} from '../../presentationals/descendant-combinator/descendant-combinator.component';
import {
  NextSiblingCombinatorComponent
} from '../../presentationals/next-sibling-combinator/next-sibling-combinator.component';
import {
  SubsequentSiblingCombinatorComponent
} from '../../presentationals/subsequent-sibling-combinator/subsequent-sibling-combinator.component';

@Component({
  selector: 'app-css-selectors',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    DescendantCombinatorComponent,
    ChildCombinatorComponent,
    NextSiblingCombinatorComponent,
    SubsequentSiblingCombinatorComponent,
    CombiningCombinatorsComponent
  ],
  templateUrl: './css-selectors.component.html',
  styleUrl: './css-selectors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssSelectorsComponent {

}
