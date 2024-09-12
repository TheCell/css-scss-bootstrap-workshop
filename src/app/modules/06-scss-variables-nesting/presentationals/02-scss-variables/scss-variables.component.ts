import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scss-variables',
  standalone: true,
  imports: [],
  templateUrl: './scss-variables.component.html',
  styleUrl: './scss-variables.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScssVariablesComponent {

}
