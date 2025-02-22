import { ErrosCamposFormularioComponent } from '../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import { validadorBase } from '../../../core/components/formulario-base/formulario-base.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './dados-contato.component.html',
  styleUrls: ['./dados-contato.component.scss'],
})
export class DadosContatoComponent extends validadorBase implements OnInit {
  public tipoTelefoneEnum = TipoTelefoneEnum.getAllValues();

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
      numeroTelefone: [null, this.ehCampoObrigatorio()],
    });
  }

  public validarConfirmacaoEmail(campo: string) {
    this.validarCampo(campo);
  }
}
