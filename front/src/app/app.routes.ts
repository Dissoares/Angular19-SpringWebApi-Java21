import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pagina-inicial',
    loadComponent: () =>
      import('./pagina-inicial/pagina-inicial.component').then(
        (c) => c.PaginaInicialComponent
      ),
    children: [
      {
        path: 'alunos',
        loadComponent: () =>
          import('./modulos/modulos-aluno/modulos-aluno.component').then(
            (c) => c.ModulosAlunoComponent
          ),
        children: [
          {
            path: 'listagem',
            loadComponent: () =>
              import(
                './modulos/modulos-aluno/alunos-listagem/alunos-listagem.component'
              ).then((c) => c.AlunosListagemComponent),
          },
          {
            path: 'formulario',
            loadComponent: () =>
              import(
                './modulos/modulos-aluno/alunos-formulario/alunos-formulario.component'
              ).then((c) => c.AlunosFormularioComponent),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'pagina-inicial',
    pathMatch: 'full',
  },
];
