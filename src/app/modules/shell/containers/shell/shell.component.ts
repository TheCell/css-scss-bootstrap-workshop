import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from '../../models/shell.models';
import { HeaderComponent } from '../../presentationals/header/header.component';
import { MainMenuComponent } from '../../presentationals/main-menu/main-menu.component';
import { ShellLayoutComponent } from '../../presentationals/shell-layout/shell-layout.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [ShellLayoutComponent, HeaderComponent, RouterOutlet, MainMenuComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  readonly menuItems: MenuItem[] = [
    {
      label: 'Home',
      routerLink: 'home'
    },
    {
      label: 'Exercise with longer title',
      routerLink: 'exercise'
    }
  ]
}
