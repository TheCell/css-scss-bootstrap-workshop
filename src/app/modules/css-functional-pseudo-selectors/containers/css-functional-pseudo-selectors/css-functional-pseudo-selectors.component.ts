import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ExercisePageLayoutComponent} from "../../../shared/layout/exercise-page-layout/exercise-page-layout.component";
import {MultipleElementComponent} from "../../presentationals/01-multiple-element/multiple-element.component";
import {ExcludeFirstChildComponent} from "../../presentationals/03-exclude-first-child/exclude-first-child.component";
import {ExcludeClassComponent} from "../../presentationals/02-exclude-class/exclude-class.component";
import {InputTypesComponent} from "../../presentationals/04-input-types/input-types.component";
import {ListSizeComponent} from "../../presentationals/05-list-size/list-size.component";
import {HasNextSiblingComponent} from "../../presentationals/06-has-next-sibling/has-next-sibling.component";
import {
  ImgAltTextComponent
} from "../../presentationals/07-img-alt-text/img-alt-text.component";
import {NoClassElementsComponent} from "../../presentationals/08-no-class-elements/no-class-elements.component";
import {HoverExcludeGapsComponent} from "../../presentationals/09-hover-exclude-gaps/hover-exclude-gaps.component";
import {
  HoverHighlightAdvancedComponent
} from "../../presentationals/10-hover-highlight-advanced/hover-highlight-advanced.component";
import {
  NextPreviousElementsComponent
} from "../../presentationals/11-next-previous-elements/next-previous-elements.component";

@Component({
  selector: 'app-css-functional-pseudo-selectors',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    MultipleElementComponent,
    ExcludeFirstChildComponent,
    ExcludeClassComponent,
    InputTypesComponent,
    ListSizeComponent,
    HasNextSiblingComponent,
    ImgAltTextComponent,
    NoClassElementsComponent,
    HoverExcludeGapsComponent,
    HoverHighlightAdvancedComponent,
    NextPreviousElementsComponent
  ],
  templateUrl: './css-functional-pseudo-selectors.component.html',
  styleUrl: './css-functional-pseudo-selectors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssFunctionalPseudoSelectorsComponent {

}
