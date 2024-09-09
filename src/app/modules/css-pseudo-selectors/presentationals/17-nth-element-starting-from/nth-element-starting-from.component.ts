import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NthElementUpwardsComponent} from "../14-nth-element-upwards/nth-element-upwards.component";

@Component({
  selector: 'app-nth-element-starting-from',
  standalone: true,
  imports: [
    NthElementUpwardsComponent
  ],
  templateUrl: './nth-element-starting-from.component.html',
  styleUrl: './nth-element-starting-from.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NthElementStartingFromComponent {

}
