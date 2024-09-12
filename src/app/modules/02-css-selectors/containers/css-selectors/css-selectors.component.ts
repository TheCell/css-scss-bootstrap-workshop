import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import {
  DescendantCombinatorComponent
} from '../../presentationals/01-descendant-combinator/descendant-combinator.component';
import { ChildCombinatorComponent } from '../../presentationals/02-child-combinator/child-combinator.component';
import {
  NextSiblingCombinatorComponent
} from '../../presentationals/03-next-sibling-combinator/next-sibling-combinator.component';
import {
  SubsequentSiblingCombinatorComponent
} from '../../presentationals/04-subsequent-sibling-combinator/subsequent-sibling-combinator.component';
import {
  CombiningCombinatorsComponent
} from '../../presentationals/05-combining-combinators/combining-combinators.component';

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
