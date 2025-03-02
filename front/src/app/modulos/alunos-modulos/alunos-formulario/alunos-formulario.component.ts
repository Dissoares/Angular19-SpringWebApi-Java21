import { AlunoDadosPessoaisComponent } from './aluno-dados-pessoais/aluno-dados-pessoais.component';
import { AlunoDadosEnderecoComponent } from './aluno-dados-endereco/aluno-dados-endereco.component';
import { ConfirmarDialogComponent } from 'app/dialogs/confirmar-dialog/confirmar-dialog.component';
import { AlunoDadosContatoComponent } from './aluno-dados-contato/aluno-dados-contato.component';
import { SnackBarPersonalizadoService } from 'app/core/services/index.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Aluno } from 'app/core/models';

@Component({
  selector: 'app-alunos-formulario',
  standalone: true,
  imports: [
    AlunoDadosPessoaisComponent,
    AlunoDadosEnderecoComponent,
    AlunoDadosContatoComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './alunos-formulario.component.html',
  styleUrls: ['./alunos-formulario.component.css'],
})
export class AlunosFormularioComponent implements OnInit {
  @ViewChild(AlunoDadosPessoaisComponent)
  public alunoDadosPessoais!: AlunoDadosPessoaisComponent;

  @ViewChild(AlunoDadosEnderecoComponent)
  public alunoDadosEndereco!: AlunoDadosEnderecoComponent;

  @ViewChild(AlunoDadosContatoComponent)
  public alunoDadosContato!: AlunoDadosContatoComponent;

  private snackBarService = inject(SnackBarPersonalizadoService);
  readonly dialog = inject(MatDialog);
  public ativarBotao: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public abrirDialogoSalvar(): void {
    const dadosAluno = new Aluno();
    dadosAluno.dadosPessoais = this.alunoDadosPessoais.obterDadosFormulario();
    dadosAluno.dadosPessoais.contato =
      this.alunoDadosContato.obterDadosFormulario();
    dadosAluno.dadosPessoais.endereco =
      this.alunoDadosEndereco.obterDadosFormulario();

    if (!this.alunoDadosPessoais.ehFormularioValido()) {
      this.alunoDadosPessoais.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário dados pessoais',
        'Erro'
      );
      return;
    }

    if (!this.alunoDadosContato.ehFormularioValido()) {
      this.alunoDadosContato.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário contato!',
        'Erro'
      );
      return;
    }

    if (!this.alunoDadosEndereco.ehFormularioValido()) {
      this.alunoDadosEndereco.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário endereço!',
        'Erro'
      );
      return;
    }

    this.dialog.open<ConfirmarDialogComponent, Aluno>(
      ConfirmarDialogComponent,
      {
        width: '350px',
        height: '350px',
        data: dadosAluno,
      }
    );
  }

  public limparFormulario(): void {
    this.alunoDadosPessoais.limparFormulario();
    this.alunoDadosEndereco.limparFormulario();
    this.alunoDadosContato.limparFormulario();
  }
}
