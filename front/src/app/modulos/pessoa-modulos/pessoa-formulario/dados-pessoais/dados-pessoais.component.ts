import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { validarCpf } from '../../../../validators/cpf.validator';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosValidatorBase } from '../../../../core/components/formularios-validator-base/formularios-validator-base.component';
import { ErrosCamposFormularioComponent } from '../../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import {
  EstadoCivilEnum,
  NacionalidadeEnum,
  TipoSexoEnum,
} from '../../../../core/enums';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [
    ErrosCamposFormularioComponent,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxMaskDirective,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
})
export class dadosPessoaisComponent
  extends FormulariosValidatorBase
  implements OnInit
{
  public nacionalidadeEnum = NacionalidadeEnum.getAllValues();
  public estadoCivilEnum = EstadoCivilEnum.getAllValues();
  public tipoSexoEnum = TipoSexoEnum.getAllValues();

  constructor() {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, this.ehCampoObrigatorio()],
      sobreNome: [null, this.ehCampoObrigatorio()],
      cpf: [null, [this.ehCampoObrigatorio(), validarCpf()]],
      sexo: [null, this.ehCampoObrigatorio()],
      dataNascimento: [null, this.ehCampoObrigatorio()],
      estadoCivil: [null],
      naturalidade: [null],
    });
  }
}
