import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
];
