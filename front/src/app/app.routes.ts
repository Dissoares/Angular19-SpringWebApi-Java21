import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/formulario-contato/formulario-contato.component').then(
        (m) => m.FormularioContatoComponent
      ),
  },
];
