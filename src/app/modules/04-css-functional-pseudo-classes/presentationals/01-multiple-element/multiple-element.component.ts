import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-multiple-element',
  standalone: true,
  imports: [],
  templateUrl: './multiple-element.component.html',
  styleUrl: './multiple-element.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleElementComponent {

}
