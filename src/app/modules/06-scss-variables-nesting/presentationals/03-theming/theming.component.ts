import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-theming',
  standalone: true,
  imports: [],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemingComponent {

  readonly isDarkMode = signal(false);

  toggleDarkMode(): void {
    this.isDarkMode.update((isDarkMode) => !isDarkMode);
  }
}
