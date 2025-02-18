import { FormularioComponent } from './pages/formulario-modulo/formulario.component'; 
import { ListagemComponent } from './pages/listagem-modulo/listagem.component'; 
import { HomeComponent } from './layout/home/home.component';
import { RotasEnum } from './core/enums/rotas.enum';
import { Routes } from '@angular/router';

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
