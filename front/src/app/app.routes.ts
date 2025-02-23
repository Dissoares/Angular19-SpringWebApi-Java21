import { AlunosFormularioComponent } from './modulos/alunos-modulo/alunos-formulario/alunos-formulario.component';
import { AlunosListagemComponent } from './modulos/alunos-modulo/alunos-listagem/alunos-listagem.component';
import { AlunosModuloComponent } from './modulos/alunos-modulo/alunos-modulo.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent,
    children: [
      {
        path: 'alunos',
        component: AlunosModuloComponent,
        children: [
          { path: 'listagem', component: AlunosListagemComponent },
          { path: 'formulario', component: AlunosFormularioComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'pagina-inicial' },
];
