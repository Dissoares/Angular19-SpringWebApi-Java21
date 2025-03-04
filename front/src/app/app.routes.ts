import { resolvendoDadosResolver } from './shared/resolvers/resolvendo-dados.resolver';
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
          import('./modulos/alunos-modulos/alunos-modulos.component').then(
            (c) => c.AlunosModulosComponent
          ),
        children: [
          {
            path: 'formulario',
            loadComponent: () =>
              import(
                './modulos/alunos-modulos/alunos-formulario/alunos-formulario.component'
              ).then((c) => c.AlunosFormularioComponent),
          },
          {
            path: 'listagem',
            resolve: { alunos: resolvendoDadosResolver },
            loadComponent: () =>
              import(
                './modulos/alunos-modulos/alunos-listagem/alunos-listagem.component'
              ).then((c) => c.AlunosListagemComponent),
          },
        ],
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'sistema/alunos/formulario',
    pathMatch: 'full',
  },
];
