import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nesting',
  standalone: true,
  imports: [],
  templateUrl: './nesting.component.html',
  styleUrl: './nesting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestingComponent {

}
