import { ErrosCamposFormularioComponent } from '../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { validarCpf } from '../../../validators/cpf.validator';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import {
  NacionalidadeEnum,
  EstadoCivilEnum,
  TipoSexoEnum,
} from '../../../core/enums';

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
export class DadosPessoaisComponent implements OnInit {
  public formulario!: FormGroup;

  public nacionalidadeEnum = NacionalidadeEnum.getAllValues();
  public estadoCivilEnum = EstadoCivilEnum.getAllValues();
  public tipoSexoEnum = TipoSexoEnum.getAllValues();

  constructor(private form: FormBuilder) {}

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.form.group({
      id: [null],
      nome: [null, Validators.required],
      sobreNome: [null, Validators.required],
      cpf: [null, [Validators.required, validarCpf()]],
      sexo: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      estadoCivil: [null],
      naturalidade: [null],
    });
  }
}
