import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/formulario-contato.component').then(
        (m) => m.FormularioContatoComponent
      ),
  },
];
