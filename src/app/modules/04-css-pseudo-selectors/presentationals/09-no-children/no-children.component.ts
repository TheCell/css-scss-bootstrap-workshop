import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-children',
  standalone: true,
  imports: [],
  templateUrl: './no-children.component.html',
  styleUrl: './no-children.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoChildrenComponent {

}
