import { ErrosCamposFormularioComponent } from 'app/shared/components/erros-campos-formulario/erros-campos-formulario.component';
import { MetodosFormulariosComponent } from 'app/shared/components/metodos-formularios/metodos-formularios.component';
import {
  NacionalidadeEnum,
  EstadoCivilEnum,
  TipoSexoEnum,
} from 'app/core/enums';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { validarCpf } from 'app/shared/validators/cpf.validator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-dados-pessoais',
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
  templateUrl: './aluno-dados-pessoais.component.html',
  styleUrls: ['./aluno-dados-pessoais.component.scss'],
})
export class AlunoDadosPessoaisComponent
  extends MetodosFormulariosComponent
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
