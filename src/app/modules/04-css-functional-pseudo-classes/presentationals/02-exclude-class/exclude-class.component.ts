import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exclude-class',
  standalone: true,
  imports: [],
  templateUrl: './exclude-class.component.html',
  styleUrl: './exclude-class.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcludeClassComponent {

}
