import { ErrosCamposFormularioComponent } from '../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import { validadorBase } from '../../../core/components/formulario-base/formulario-base.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TipoTelefoneEnum } from '../../../core/enums';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ErrosCamposFormularioComponent,
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
  templateUrl: './dados-contato.component.html',
  styleUrls: ['./dados-contato.component.scss'],
})
export class DadosContatoComponent extends validadorBase implements OnInit {
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
      email: [null, [this.validarEmail(), this.ehCampoObrigatorio()]],
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

  public validarConfirmacaoEmail(campo: string) {
    this.validarCampo(campo);
  }

  public alterarMascaraTelefone(evento: MatSelectChange) {
    this.limparCampo('numeroTelefone');
    this.ativarCampo('numeroTelefone');
    evento.value === TipoTelefoneEnum.CELULAR.id
      ? (this.mascaraTelefone = '(99)99999-9999')
      : (this.mascaraTelefone = '(99)9999-9999');
  }

  public removerSelecao(eventoClick: MouseEvent, campo: string): void {
    this.limparCampo(campo);
    eventoClick.stopPropagation();
  }
}
