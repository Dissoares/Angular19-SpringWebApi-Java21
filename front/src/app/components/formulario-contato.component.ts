import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormularioContatoService } from '../core/services/formulario-contato.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DadosPessoais } from '../core/models/dados-pessoais';
import { TipoSexoEnum } from '../core/enums/tipo-sexo.enum';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { Component, inject } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { StatusSolicitacaoEnum } from '../core/enums/status-solicitacao.enum';

registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.scss',
})
export class FormularioContatoComponent {
  public formulario!: FormGroup;
  public tipoSexoEnum = TipoSexoEnum.values();
  public statusSolicitacaoEnum = StatusSolicitacaoEnum.values();

  public divisor: string = 'item dividido';
  public sidebarAberta: boolean = true;

  private snackBarService = inject(MatSnackBar);

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
      this.snackBarService.open('preencha o formulário corretamente', 'Erro');
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
    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();
  }

  public ativarSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }
}
