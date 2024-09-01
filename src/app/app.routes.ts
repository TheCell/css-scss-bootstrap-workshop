import { Routes } from '@angular/router';
import { ShellComponent } from './modules/shell';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home').then((feature) => feature.routes)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ]
  }
];
