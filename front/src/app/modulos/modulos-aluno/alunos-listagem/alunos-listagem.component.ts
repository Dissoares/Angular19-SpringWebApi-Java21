import { AlunosFiltroComponent } from './alunos-filtro/alunos-filtro.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-listagem',
  standalone: true,
  imports: [AlunosFiltroComponent],
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.scss'],
})
export class AlunosListagemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
