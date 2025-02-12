import { ConfirmarDialogComponent } from '../../dialogs/confirmar-dialog/confirmar-dialog.component';
import { DadosPessoaisComponent } from './cadastro/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './cadastro/endereco/endereco.component';
import { ContatoComponent } from './cadastro/contato/contato.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DadosPessoais } from '../../core/models/dados-pessoais';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    DadosPessoaisComponent,
    EnderecoComponent,
    ContatoComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  public formulario!: FormGroup;
  readonly dialog = inject(MatDialog);

  constructor() {}

  ngOnInit(): void {}

  public abrirDialogoSalvar(): void {
    const dadosFormulario: DadosPessoais = this.formulario.value;
    this.dialog.open(ConfirmarDialogComponent, {
      width: '350px',
      height: '350px',
      data: { dados: dadosFormulario },
    });
  }

  public limparFormulario(): void {
    this.formulario.reset();
    this.formulario.markAsUntouched();
  }
}
