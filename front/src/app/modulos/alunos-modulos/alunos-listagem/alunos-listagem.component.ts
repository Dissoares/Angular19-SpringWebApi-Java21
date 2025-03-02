import { AlunosService } from 'app/core/services/alunos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'app/core/models';

@Component({
  selector: 'app-alunos-listagem',
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css'],
})
export class AlunosListagemComponent implements OnInit {
  public listaAlunos: Array<Aluno> = [];
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.buscarAlunoDaRota();
  }

  public buscarAlunoDaRota() {
    this.route.queryParams.subscribe((dadosRota: Params) => {
      let id = dadosRota['idAluno'];
      this.alunosService.buscarPorId(id).subscribe((aluno: Aluno) => {
        this.listaAlunos.push(aluno);
      });
    });
  }
}
