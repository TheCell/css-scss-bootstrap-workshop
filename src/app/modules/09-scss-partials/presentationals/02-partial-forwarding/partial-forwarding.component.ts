import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-partial-forwarding',
  standalone: true,
  imports: [],
  templateUrl: './partial-forwarding.component.html',
  styleUrl: './partial-forwarding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialForwardingComponent {

}
