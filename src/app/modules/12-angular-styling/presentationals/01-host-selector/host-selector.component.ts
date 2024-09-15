import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-host-selector',
  standalone: true,
  imports: [],
  templateUrl: './host-selector.component.html',
  styleUrl: './host-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostSelectorComponent {

}
