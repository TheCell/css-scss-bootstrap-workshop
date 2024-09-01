import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../models/shell.models';

@Component({
  selector: 'app-main-menu-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-menu-item.component.html',
  styleUrl: './main-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuItemComponent {
  menuItem = input.required<MenuItem>();
}
