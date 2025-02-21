import { ConfirmarDialogComponent } from '../../dialogs/confirmar-dialog/confirmar-dialog.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosEnderecoComponent } from './dados-endereco/dados-endereco.component';
import { DadosContatoComponent } from './dados-contato/dados-contato.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SnackBarPersonalizadoService } from '../../core/services';
import { DadosPessoais } from '../../core/models/dados-pessoais';
import { DadosContato, DadosEndereco } from '../../core/models';
import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DadosFormularioDto } from '../../core/dtos';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-pessoa',
  standalone: true,
  imports: [
    DadosPessoaisComponent,
    DadosEnderecoComponent,
    DadosContatoComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './formulario-pessoa.component.html',
  styleUrl: './formulario-pessoa.component.scss',
})
export class FormularioPessoaComponent {
  @ViewChild(DadosPessoaisComponent)
  public dadosPessoaisComponent!: DadosPessoaisComponent;

  @ViewChild(DadosEnderecoComponent)
  public enderecoComponent!: DadosEnderecoComponent;

  @ViewChild(DadosContatoComponent)
  public contatoComponent!: DadosContatoComponent;

  private snackBarService = inject(SnackBarPersonalizadoService);
  public formulario!: FormGroup;
  readonly dialog = inject(MatDialog);
  public ativarBotao: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public abrirDialogoSalvar(): void {
    const dadosPessoais: DadosPessoais =
      this.dadosPessoaisComponent.formulario.getRawValue();
    const dadosContato: DadosContato =
      this.contatoComponent.formulario.getRawValue();
    const dadosEndereco: DadosEndereco =
      this.enderecoComponent.formulario.getRawValue();

    if (dadosPessoais && this.dadosPessoaisComponent.formulario.invalid) {
      this.dadosPessoaisComponent.formulario.markAllAsTouched();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário dados pessoais',
        'Erro'
      );
      return;
    }

    if (dadosContato && this.contatoComponent.formulario.invalid) {
      this.contatoComponent.formulario.markAllAsTouched();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário contato!',
        'Erro'
      );
      return;
    }

    if (dadosEndereco && this.enderecoComponent.formulario.invalid) {
      this.enderecoComponent.formulario.markAllAsTouched();
      this.snackBarService.abrirSnackBar(
        'Preencha todos os campos obrigatórios do formulário endereço!',
        'Erro'
      );
      return;
    }
    
    this.ativarBotao = true;
    const novosDados = new DadosFormularioDto();
    novosDados.dadosPessoais = dadosPessoais;
    novosDados.dadosEndereco = dadosEndereco;
    novosDados.dadosContato = dadosContato;

    this.dialog.open(ConfirmarDialogComponent, {
      width: '350px',
      height: '350px',
      data: { dados: novosDados },
    });
  }

  public limparFormulario(): void {
    this.dadosPessoaisComponent.formulario.reset();
    this.enderecoComponent.formulario.reset();
    this.contatoComponent.formulario.reset();
  }
}
