import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-class-elements',
  standalone: true,
  imports: [],
  templateUrl: './no-class-elements.component.html',
  styleUrl: './no-class-elements.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoClassElementsComponent {

}
