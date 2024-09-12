import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-every-nth-list-item',
  standalone: true,
  imports: [],
  templateUrl: './every-nth-list-item.component.html',
  styleUrl: './every-nth-list-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EveryNthListItemComponent {

}
