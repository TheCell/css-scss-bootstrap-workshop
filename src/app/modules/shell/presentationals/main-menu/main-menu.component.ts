import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MenuItem } from '../../models/shell.models';
import { MainMenuItemComponent } from '../main-menu-item/main-menu-item.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    MainMenuItemComponent
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {
  menuItems = input.required<MenuItem[]>();

  logoClicked = output<void>();

  onLogoClick(): void {
    this.logoClicked.emit();
  }
}
