import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TipoTelefoneEnum } from '../../../../core/enums';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent implements OnInit {
  public formulario!: FormGroup;
  public tipoTelefoneEnum = TipoTelefoneEnum.getAllValues();

  constructor(private form: FormBuilder) {}

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.form.group({
      id: [null],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null],
      tipoTelefone: [null],
    });
  }
}
