import { ErrosCamposFormularioComponent } from 'app/shared/components/erros-campos-formulario/erros-campos-formulario.component';
import { MetodosFormulariosComponent } from 'app/shared/components/metodos-formularios/metodos-formularios.component';
import { AtualizaCamposFormulariosDiretiva } from 'app/shared/directives/validar-campo.directive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { TipoTelefoneEnum } from 'app/core/enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-dados-contato',
  standalone: true,
  imports: [
    ErrosCamposFormularioComponent,
    AtualizaCamposFormulariosDiretiva,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgxMaskDirective,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './aluno-dados-contato.component.html',
  styleUrls: ['./aluno-dados-contato.component.scss'],
})
export class AlunoDadosContatoComponent
  extends MetodosFormulariosComponent
  implements OnInit
{
  public tipoTelefoneEnum = TipoTelefoneEnum.getAllValues();
  public mascaraTelefone: string = '';
  constructor() {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      email: [null, [this.ehCampoObrigatorio(), this.validarEmail()]],
      confirmacaoEmail: [
        null,
        [this.ehCampoObrigatorio(), this.validarEmail(), this.confirmarEmail()],
      ],
      tipoTelefone: [null, this.ehCampoObrigatorio()],
      numeroTelefone: [
        { value: null, disabled: true },
        [this.ehCampoObrigatorio(), Validators.minLength(10)],
      ],
    });
  }

  public alterarMascaraTelefone(evento: MatSelectChange) {
    this.limparCampo('numeroTelefone');
    this.ativarCampo('numeroTelefone');
    evento.value === TipoTelefoneEnum.CELULAR.id
      ? (this.mascaraTelefone = '(99)99999-9999')
      : (this.mascaraTelefone = '(99)9999-9999');
  }

  public removerSelecao(eventoClick: MouseEvent, campo: string): void {
    this.desativarCampo('numeroTelefone');
    this.limparCampo(campo);
    eventoClick.stopPropagation();
  }
}
