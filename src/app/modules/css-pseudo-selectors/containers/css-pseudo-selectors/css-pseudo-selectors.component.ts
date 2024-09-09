import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExercisePageLayoutComponent
} from '../../../shared/layout/exercise-page-layout/exercise-page-layout.component';
import {HoverLinksComponent} from "../../presentationals/01-hover-links/hover-links.component";
import {FirstParagraphComponent} from "../../presentationals/02-first-paragraph/first-paragraph.component";
import {VisitedLinksComponent} from "../../presentationals/03-visited-links/visited-links.component";
import {EvenListItemsComponent} from "../../presentationals/04-even-list-items/even-list-items.component";
import {FirstChildComponent} from "../../presentationals/05-first-child/first-child.component";
import {OddTableColumnsComponent} from "../../presentationals/06-odd-table-columns/odd-table-columns.component";
import {InputFocusComponent} from "../../presentationals/07-input-focus/input-focus.component";
import {InputDisabledComponent} from "../../presentationals/08-input-disabled/input-disabled.component";
import {NoChildrenComponent} from "../../presentationals/09-no-children/no-children.component";
import {EveryNthListItemComponent} from "../../presentationals/10-every-nth-list-item/every-nth-list-item.component";
import {LastElementComponent} from "../../presentationals/11-last-element/last-element.component";
import {
  ThirdToLastElementComponent
} from "../../presentationals/12-third-to-last-element/third-to-last-element.component";
import {CheckedInputsComponent} from "../../presentationals/13-checked-inputs/checked-inputs.component";
import {NthElementUpwardsComponent} from "../../presentationals/14-nth-element-upwards/nth-element-upwards.component";
import {
  NthElementDownwardsComponent
} from "../../presentationals/15-nth-element-downwards/nth-element-downwards.component";
import {RangeOfElementsComponent} from "../../presentationals/16-range-of-elements/range-of-elements.component";
import {
  NthElementStartingFromComponent
} from "../../presentationals/17-nth-element-starting-from/nth-element-starting-from.component";
import {HoverHighlightComponent} from "../../presentationals/18-hover-highlight/hover-highlight.component";

@Component({
  selector: 'app-css-pseudo-selectors',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    HoverLinksComponent,
    FirstParagraphComponent,
    VisitedLinksComponent,
    EvenListItemsComponent,
    FirstChildComponent,
    OddTableColumnsComponent,
    InputFocusComponent,
    InputDisabledComponent,
    NoChildrenComponent,
    EveryNthListItemComponent,
    LastElementComponent,
    ThirdToLastElementComponent,
    CheckedInputsComponent,
    NthElementUpwardsComponent,
    NthElementDownwardsComponent,
    RangeOfElementsComponent,
    NthElementStartingFromComponent,
    HoverHighlightComponent
  ],
  templateUrl: './css-pseudo-selectors.component.html',
  styleUrl: './css-pseudo-selectors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssPseudoSelectorsComponent {

}
