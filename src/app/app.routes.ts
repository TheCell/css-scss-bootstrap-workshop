import { Routes } from '@angular/router';
import { FeatureRoutes } from './modules/shared/models/feature-route.models';
import { ShellComponent } from './modules/shell';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: FeatureRoutes.HOME,
        loadChildren: () => import('./modules/home').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_BASICS,
        loadChildren: () => import('./modules/css-basics').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_SELECTORS,
        loadChildren: () => import('./modules/css-selectors').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_PSEUDO_SELECTORS,
        loadChildren: () => import('./modules/css-pseudo-selectors').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_FUNCTIONAL_PSEUDO_SELECTORS,
        loadChildren: () => import('./modules/css-functional-pseudo-selectors').then((feature) => feature.routes)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ]
  }
];
