import { Routes } from '@angular/router';
import { RotasEnum } from './core/enums/rotas.enum';

export const routes: Routes = [
  {
    path: 'formulario',
    loadComponent: () =>
      import('./layout/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'listagem',
    loadComponent: () =>
      import('./layout/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '**', redirectTo: RotasEnum.FORMULARIO },
];
