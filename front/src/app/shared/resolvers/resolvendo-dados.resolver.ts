import { AlunosService } from 'app/core/services/alunos.service';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const resolvendoDadosResolver: ResolveFn<any> = (route, state) => {
  if (state.url.includes('idAluno')) return;
  const alunosService = inject(AlunosService);
  return alunosService.buscarTodos();
};
