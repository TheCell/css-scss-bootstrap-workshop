import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-box-model',
  standalone: true,
  imports: [],
  templateUrl: './box-model.component.html',
  styleUrl: './box-model.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxModelComponent {

}
