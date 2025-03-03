import {
  MatPaginatorModule,
  MatPaginatorIntl,
  MatPaginator,
} from '@angular/material/paginator';
import { AlunosFiltroComponent } from './alunos-filtro/alunos-filtro.component';
import { getPaginatorPortugues } from 'app/shared/config/paginator-portugues';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ColunasTabelaAlunos, DadosEndereco, Aluno } from 'app/core/models';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormatarDataPtbrPipe } from 'app/shared/formatar-data-ptbr.pipe';
import { AlunosService } from 'app/core/services/alunos.service';
import { TipoSexoEnum, TipoTelefoneEnum } from 'app/core/enums';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaskService, provideNgxMask } from 'ngx-mask';
import { ActivatedRoute, Params } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FiltroDto } from 'app/core/dtos/filtro-dto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alunos-listagem',
  standalone: true,
  imports: [
    AlunosFiltroComponent,
    FormatarDataPtbrPipe,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './alunos-listagem.component.html',
  styleUrls: ['./alunos-listagem.component.css'],
  providers: [
    provideNgxMask(),
    { provide: MatPaginatorIntl, useFactory: getPaginatorPortugues },
  ],
})
export class AlunosListagemComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public listaAlunos: Array<Aluno> = [];
  public colunasTabela = Object.values(new ColunasTabelaAlunos());
  public dadosTabela = new MatTableDataSource<Aluno>(this.listaAlunos);

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private maskService: NgxMaskService
  ) {}

  ngOnInit() {
    this.buscarTodosEPreencherTabela();
    this.buscarAlunoDaRota();
  }

  ngAfterViewInit() {
    this.dadosTabela.paginator = this.paginator;
  }

  public buscarTodosEPreencherTabela() {
    this.route.data.subscribe((alunosDados) => {
      const alunos: Array<Aluno> = alunosDados['alunos'];

      this.listaAlunos = alunos;
      this.dadosTabela.data = [...this.listaAlunos];
    });
  }

  public filtrarALunos(filtro: FiltroDto) {
    this.alunosService.filtrar(filtro).subscribe((alunos: Array<Aluno>) => {
      this.listaAlunos = alunos;
      this.dadosTabela.data = [...this.listaAlunos];
    });
  }

  public buscarAlunoDaRota() {
    this.route.queryParams.subscribe((dadosRota: Params) => {
      let id = dadosRota['idAluno'];
      if (!id) return;

      this.alunosService.buscarPorId(id).subscribe((aluno: Aluno) => {
        this.listaAlunos.push(aluno);
        this.dadosTabela.data = [...this.listaAlunos];
      });
    });
  }

  public getDescricaoTipoSexo(sexo: number): string {
    if (!sexo) return '';
    return TipoSexoEnum.getByCodigo(sexo)?.descricao || '';
  }

  public getDescricaoTipoTelefone(tipo: number): string {
    if (!tipo) return '';
    return TipoTelefoneEnum.getByCodigo(tipo)?.descricao || '';
  }

  public retonaEnderecoConcatenado(endereco: DadosEndereco): string {
    const concatenado: string[] = [];
    if (endereco.rua && endereco.numero)
      concatenado.push(`${endereco.rua} Nº${endereco.numero} - `);
    if (endereco.cep) concatenado.push(`CEP: ${endereco.cep}`);
    if (endereco.bairro) concatenado.push(`, ${endereco.bairro}`);
    if (endereco.cidade) concatenado.push(`, ${endereco.cidade}`);
    if (endereco.estado) concatenado.push(`/${endereco.estado}`);
    return concatenado.join('').toUpperCase() || '';
  }

  public aplicarMascaraCpf(cpf: string): string {
    if (!cpf) return '';
    return this.maskService.applyMask(cpf, '000.000.000-00');
  }

  public aplicarMascaraTelefone(numero: string, tipo: string): string {
    if (!numero || !tipo) return '';
    if (Number(tipo) === TipoTelefoneEnum.CELULAR.codigo)
      return this.maskService.applyMask(numero, '(99)99999-9999');
    return this.maskService.applyMask(numero, '(99)9999-9999');
  }
}
