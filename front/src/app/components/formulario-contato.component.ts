import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormularioContatoService } from '../core/services/formulario-contato.service';
import { StatusSolicitacaoEnum } from '../core/enums/status-solicitacao.enum';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DadosPessoais } from '../core/models/dados-pessoais';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TipoSexoEnum } from '../core/enums/tipo-sexo.enum';
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
  selector: 'app-formulario-contato',
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
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.scss',
})
export class FormularioContatoComponent {
  public formulario!: FormGroup;
  public statusSolicitacaoEnum = StatusSolicitacaoEnum.values();
  private snackBarService = inject(MatSnackBar);
  
  public tipoSexoEnum = TipoSexoEnum.values();

  public divisor: string = 'item dividido';

  constructor(
    private formularioContatoService: FormularioContatoService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.fb.group({
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

  public salvarDados(): void {
    if (!this.formulario.valid) {
      this.snackBarService.open('Preencha os campos do formulário corretamente', 'Erro');
      return;
    }
    const dados: DadosPessoais = this.formulario.value;

    this.formularioContatoService.salvarDadosPessoais(dados).subscribe(
      (response: any) => {
        console.log('Dados enviados com sucesso!', response);
        this.snackBarService.open('Dados enviados com sucesso!', 'Sucesso!');
      },
      (error: any) => {
        console.error('Erro ao enviar os dados:', error);
        this.snackBarService.open('Erro ao enviar os dados:', 'Erro');
      }
    );
  }

  public limparFormulario(): void {
    this.formulario.reset();
    this.formulario.markAsUntouched();
  }
}
