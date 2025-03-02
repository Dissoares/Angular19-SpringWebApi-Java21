import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AlunosService } from 'app/core/services/alunos.service';
import { Aluno, ColunasTabelaAlunos } from 'app/core/models';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos-listagem',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css'],
})
export class AlunosListagemComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public listaAlunos: Array<Aluno> = [];
  public colunasTabela = Object.values(new ColunasTabelaAlunos());
  public dadosTabela = new MatTableDataSource<Aluno>(this.listaAlunos);

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {
    this.buscarAlunoDaRota();
  }

  ngAfterViewInit() {
    this.dadosTabela.paginator = this.paginator;
  }

  public buscarAlunoDaRota() {
    this.route.queryParams.subscribe((dadosRota: Params) => {
      let id = dadosRota['idAluno'];
      this.alunosService.buscarPorId(id).subscribe((aluno: Aluno) => {
        this.listaAlunos.push(aluno);
        this.dadosTabela.data = [...this.listaAlunos];
      });
    });
  }
}
