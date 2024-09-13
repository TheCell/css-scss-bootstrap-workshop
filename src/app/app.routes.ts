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
        loadChildren: () => import('./modules/01-css-basics').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_SELECTORS,
        loadChildren: () => import('./modules/02-css-selectors').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_PSEUDO_SELECTORS,
        loadChildren: () => import('./modules/03-css-pseudo-classes').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_FUNCTIONAL_PSEUDO_SELECTORS,
        loadChildren: () => import('./modules/04-css-functional-pseudo-classes').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.CSS_PSEUDO_ELEMENTS,
        loadChildren: () => import('./modules/05-css-pseudo-elements').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.SCSS_VARIABLES_NESTING,
        loadChildren: () => import('./modules/06-scss-variables-nesting').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.SCSS_MIXINS,
        loadChildren: () => import('./modules/07-scss-mixins').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.SCSS_FUNCTIONS,
        loadChildren: () => import('./modules/08-scss-functions').then((feature) => feature.routes)
      },
      {
        path: FeatureRoutes.SCSS_PARTIALS,
        loadChildren: () => import('./modules/09-scss-partials').then((feature) => feature.routes)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ]
  }
];
