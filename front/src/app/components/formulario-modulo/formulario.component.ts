import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmarDialogComponent } from './dialogs/confirmar-dialog/confirmar-dialog.component';
import { StatusSolicitacaoEnum } from '../../core/enums/status-solicitacao.enum';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DadosPessoais } from '../../core/models/dados-pessoais';
import { TipoSexoEnum } from '../../core/enums/tipo-sexo.enum';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Component, inject } from '@angular/core';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  public formulario!: FormGroup;
  public statusSolicitacaoEnum = StatusSolicitacaoEnum.values();
  private snackBarService = inject(MatSnackBar);

  public tipoSexoEnum = TipoSexoEnum.values();

  public divisor: string = 'item dividido';

  readonly dialog = inject(MatDialog);

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.form.group({
      id: [null],
      nome: [null],
      cpf: [null],
      dataNascimento: [null],
      sexo: [null],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null],
      statusSolicitacao: [null],
    });
  }

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
