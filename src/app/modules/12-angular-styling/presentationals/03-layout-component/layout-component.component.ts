import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponentComponent {

}
