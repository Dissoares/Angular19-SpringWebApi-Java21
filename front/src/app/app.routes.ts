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
    path: 'sistema',
    loadComponent: () =>
      import('./layout/home/conteudo/conteudo.component').then(
        (c) => c.ConteudoComponent
      ),
    children: [
      {
        path: 'usuario',
        loadComponent: () =>
          import('./modulos/usuarios-modulos/usuarios-modulos.component').then(
            (c) => c.UsuariosModulosComponent
          ),
        children: [
          {
            path: 'formulario',
            loadComponent: () =>
              import(
                './modulos/usuarios-modulos/usuarios-formulario/usuarios-formulario.component'
              ).then((c) => c.UsuariosFormularioComponent),
          },
          {
            path: 'listagem',
            loadComponent: () =>
              import(
                './modulos/usuarios-modulos/usuarios-listagem/usuarios-listagem.component'
              ).then((c) => c.UsuariosListagemComponent),
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'usuarios',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'sistema/alunos/formulario',
    pathMatch: 'full',
  },
];
