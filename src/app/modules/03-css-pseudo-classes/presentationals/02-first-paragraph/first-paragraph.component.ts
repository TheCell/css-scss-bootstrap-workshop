import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './first-paragraph.component.html',
  styleUrl: './first-paragraph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstParagraphComponent {

}
