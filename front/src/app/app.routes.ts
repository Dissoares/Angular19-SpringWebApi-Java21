import { AlunosFormularioComponent } from './modulos/modulos-aluno/alunos-formulario/alunos-formulario.component';
import { AlunosListagemComponent } from './modulos/modulos-aluno/alunos-listagem/alunos-listagem.component';
import { ModulosAlunoComponent } from './modulos/modulos-aluno/modulos-aluno.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent,
    children: [
      {
        path: 'alunos',
        component: ModulosAlunoComponent,
        children: [
          { path: 'listagem', component: AlunosListagemComponent },
          { path: 'formulario', component: AlunosFormularioComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'pagina-inicial' },
];
