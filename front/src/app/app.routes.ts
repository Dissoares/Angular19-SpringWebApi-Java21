import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sistema',
    loadComponent: () =>
      import('./layout/home/conteudo/conteudo.component').then(
        (c) => c.ConteudoComponent
      ),
    children: [
      {
        path: 'alunos',
        loadComponent: () =>
          import('./modulos/alunos-modulo/alunos-modulo.component').then(
            (c) => c.AlunosModuloComponent
          ),
        children: [
          {
            path: 'formulario',
            loadComponent: () =>
              import(
                './modulos/alunos-modulo/alunos-formulario/alunos-formulario.component'
              ).then((c) => c.AlunosFormularioComponent),
          },
          {
            path: 'listagem',
            loadComponent: () =>
              import(
                './modulos/alunos-modulo/alunos-listagem/alunos-listagem.component'
              ).then((c) => c.AlunosListagemComponent),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'sistema',
    pathMatch: 'full',
  },
];
