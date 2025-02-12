import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { FormularioComponent } from './components/formulario-modulo/formulario.component'; 
import { ListagemComponent } from './components/listagem-modulo/listagem.component'; 
import { RotasEnum } from './core/enums/rotas.enum';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'formulario', component: FormularioComponent },
      { path: 'listagem', component: ListagemComponent },
      { path: '', redirectTo: RotasEnum.FORMULARIO, pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: RotasEnum.FORMULARIO },
];
