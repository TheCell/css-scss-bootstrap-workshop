import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FeatureRoutes } from '../../../shared/models/feature-route.models';
import { MenuItem } from '../../models/shell.models';
import { MainMenuComponent } from '../../presentationals/main-menu/main-menu.component';
import { ShellLayoutComponent } from '../../presentationals/shell-layout/shell-layout.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [ShellLayoutComponent, RouterOutlet, MainMenuComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  private readonly router = inject(Router);

  readonly menuItems: MenuItem[] = [
    {
      label: 'CSS - Basics',
      routerLink: FeatureRoutes.CSS_BASICS
    },
    {
      label: 'CSS - Selectors',
      routerLink: FeatureRoutes.CSS_SELECTORS
    },
    {
      label: 'CSS - Pseudo Selectors',
      routerLink: FeatureRoutes.CSS_PSEUDO_SELECTORS
    },
    {
      label: 'CSS - Functional Pseudo Selectors',
      routerLink: FeatureRoutes.CSS_FUNCTIONAL_PSEUDO_SELECTORS
    },
    {
      label: 'CSS - Pseudo Elements',
      routerLink: FeatureRoutes.CSS_PSEUDO_ELEMENTS
    },
    {
      label: 'SCSS - Variables & Nesting',
      routerLink: FeatureRoutes.SCSS_VARIABLES_NESTING
    },
    {
      label: 'SCSS - Mixins',
      routerLink: FeatureRoutes.SCSS_MIXINS
    },
    {
      label: 'SCSS - Functions',
      routerLink: FeatureRoutes.SCSS_FUNCTIONS
    },
    {
      label: 'SCSS - Partials',
      routerLink: FeatureRoutes.SCSS_PARTIALS
    },
    {
      label: 'Layout - Media Queries',
      routerLink: FeatureRoutes.LAyOUT_MEDIA_QUERIES
    }
  ]

  onLogoClicked(): void {
    this.router.navigate([FeatureRoutes.HOME])
  }
}
