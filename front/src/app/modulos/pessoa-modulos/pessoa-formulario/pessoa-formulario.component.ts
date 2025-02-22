
import { DadosEnderecoComponent } from './dados-endereco/dados-endereco.component';
import { DadosContatoComponent } from './dados-contato/dados-contato.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SnackBarPersonalizadoService } from '../../../core/services';
import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { DadosFormularioDto } from '../../../core/dtos';
import { ConfirmarDialogComponent } from '../../../dialogs/confirmar-dialog/confirmar-dialog.component';
import { dadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';

@Component({
  selector: 'app-formulario-pessoa',
  standalone: true,
  imports: [
    dadosPessoaisComponent,
    DadosEnderecoComponent,
    DadosContatoComponent,
    MatButtonModule,
    MatDialogModule,

    MatIconModule,
    MatCardModule,
    CommonModule,
  ],

    templateUrl: './formulario-pessoa.component.html',
    styleUrls: ['./formulario-pessoa.component.scss'],
})
export class PessoaFormularioComponent {
  @ViewChild(dadosPessoaisComponent)
  public dadosPessoaisComponent!: dadosPessoaisComponent;

  @ViewChild(DadosEnderecoComponent)
  public enderecoComponent!: DadosEnderecoComponent;

  @ViewChild(DadosContatoComponent)
  public contatoComponent!: DadosContatoComponent;

  private snackBarService = inject(SnackBarPersonalizadoService);
  readonly dialog = inject(MatDialog);
  public ativarBotao: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public abrirDialogoSalvar(): void {
    const dados: DadosFormularioDto = {
      dadosPessoais: this.dadosPessoaisComponent.obterDadosFormulario(),
      dadosEndereco: this.enderecoComponent.obterDadosFormulario(),
      dadosContato: this.contatoComponent.obterDadosFormulario(),
    };

    if (!this.dadosPessoaisComponent.ehFormularioValido()) {
      this.dadosPessoaisComponent.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário dados pessoais',
        'Erro'
      );
      return;
    }

    if (!this.contatoComponent.ehFormularioValido()) {
      this.contatoComponent.marcarFormularioComoTocado();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário contato!',
        'Erro'
      );
      return;
    }

    if (!this.enderecoComponent.ehFormularioValido()) {
      this.enderecoComponent.marcarFormularioComoTocado();
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
    this.contatoComponent.limparFormulario();
  }
}
