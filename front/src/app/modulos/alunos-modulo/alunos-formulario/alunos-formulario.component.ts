import { AlunoDadosPessoaisComponent } from './aluno-dados-pessoais/aluno-dados-pessoais.component';
import { AlunoDadosEnderecoComponent } from './aluno-dados-endereco/aluno-dados-endereco.component';
import { ConfirmarDialogComponent } from 'app/dialogs/confirmar-dialog/confirmar-dialog.component';
import { AlunoDadosContatoComponent } from './aluno-dados-contato/aluno-dados-contato.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SnackBarPersonalizadoService } from 'app/shared/services';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DadosFormularioDto } from 'app/core/dtos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  public alunoDadosPessoaisComponent!: AlunoDadosPessoaisComponent;

  @ViewChild(AlunoDadosEnderecoComponent)
  public alunoDadosEnderecoComponent!: AlunoDadosEnderecoComponent;

  @ViewChild(AlunoDadosContatoComponent)
  public alunoDadosContatoComponent!: AlunoDadosContatoComponent;

  private snackBarService = inject(SnackBarPersonalizadoService);
  readonly dialog = inject(MatDialog);
  public ativarBotao: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public abrirDialogoSalvar(): void {
    const dados: DadosFormularioDto = {
      dadosPessoais: this.alunoDadosPessoaisComponent.obterDadosFormulario(),
      dadosEndereco: this.alunoDadosEnderecoComponent.obterDadosFormulario(),
      dadosContato: this.alunoDadosContatoComponent.obterDadosFormulario(),
    };

    if (!this.alunoDadosPessoaisComponent.ehFormularioValido()) {
      this.alunoDadosPessoaisComponent.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário dados pessoais',
        'Erro'
      );
      return;
    }

    if (!this.alunoDadosContatoComponent.ehFormularioValido()) {
      this.alunoDadosContatoComponent.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário contato!',
        'Erro'
      );
      return;
    }

    if (!this.alunoDadosEnderecoComponent.ehFormularioValido()) {
      this.alunoDadosEnderecoComponent.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário endereço!',
        'Erro'
      );
      return;
    }

    this.dialog.open<ConfirmarDialogComponent, { dados: DadosFormularioDto }>(
      ConfirmarDialogComponent,
      {
        width: '350px',
        height: '350px',
        data: { dados: dados },
      }
    );
  }

  public limparFormulario(): void {
    this.alunoDadosPessoaisComponent.limparFormulario();
    this.alunoDadosEnderecoComponent.limparFormulario();
    this.alunoDadosContatoComponent.limparFormulario();
  }
}
