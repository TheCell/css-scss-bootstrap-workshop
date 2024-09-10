import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ExercisePageLayoutComponent} from "../../../shared/layout/exercise-page-layout/exercise-page-layout.component";
import {HighlightSelectionComponent} from "../../presentationals/01-highlight-selection/highlight-selection.component";
import {FirstLetterComponent} from "../../presentationals/02-first-letter/first-letter.component";
import {MarkerHighlightComponent} from "../../presentationals/03-marker-highlight/marker-highlight.component";
import {TooltipComponent} from "../../presentationals/06-tooltip/tooltip.component";
import {
  ExternalLinkSuffixComponent
} from "../../presentationals/04-external-link-suffix/external-link-suffix.component";
import {ParenthesisComponent} from "../../presentationals/05-parenthesis/parenthesis.component";

@Component({
  selector: 'app-css-pseudo-elements',
  standalone: true,
  imports: [
    ExercisePageLayoutComponent,
    HighlightSelectionComponent,
    FirstLetterComponent,
    MarkerHighlightComponent,
    TooltipComponent,
    ExternalLinkSuffixComponent,
    ParenthesisComponent
  ],
  templateUrl: './css-pseudo-elements.component.html',
  styleUrl: './css-pseudo-elements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssPseudoElementsComponent {

}
