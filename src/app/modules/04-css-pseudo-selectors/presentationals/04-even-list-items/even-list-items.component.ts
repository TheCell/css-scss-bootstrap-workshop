import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-even-list-items',
  standalone: true,
  imports: [],
  templateUrl: './even-list-items.component.html',
  styleUrl: './even-list-items.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvenListItemsComponent {

}
