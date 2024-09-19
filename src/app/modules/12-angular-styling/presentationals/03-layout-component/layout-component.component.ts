import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyLayoutComponent } from '../my-layout/my-layout.component';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [MyLayoutComponent],
  templateUrl: './layout-component.component.html',
  styleUrl: './layout-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponentComponent {

}
