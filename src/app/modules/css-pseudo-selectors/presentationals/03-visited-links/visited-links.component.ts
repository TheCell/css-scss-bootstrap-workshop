import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-visited-links',
  standalone: true,
  imports: [],
  templateUrl: './visited-links.component.html',
  styleUrl: './visited-links.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitedLinksComponent {

}
