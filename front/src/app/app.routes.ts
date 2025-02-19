import { FormularioPessoaComponent } from './pages/formulario-modulo/formulario-pessoa.component'; 
import { ListagemPessoaComponent } from './pages/listagem-modulo/listagem-pessoa.component'; 
import { HomeComponent } from './layout/home/home.component';
import { RotasEnum } from './core/enums/rotas.enum';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'formulario', component: FormularioPessoaComponent },
      { path: 'listagem', component: ListagemPessoaComponent },
      { path: '', redirectTo: RotasEnum.FORMULARIO, pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: RotasEnum.FORMULARIO },
];
