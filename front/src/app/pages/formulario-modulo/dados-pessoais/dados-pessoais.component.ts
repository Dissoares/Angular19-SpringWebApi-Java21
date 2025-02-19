import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EstadoCivilEnum, TipoSexoEnum, NacionalidadeEnum } from '../../../core/enums';
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

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule, 
    NgxMaskDirective
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
      nome: [null],
      cpf: [null, [Validators.required, validarCpf()] ],
      rg: [null],
      dataNascimento: [null],
      genero: [null],
      estadoCivil: [null],
      nacionalidade: [null]
    });
  }
}
