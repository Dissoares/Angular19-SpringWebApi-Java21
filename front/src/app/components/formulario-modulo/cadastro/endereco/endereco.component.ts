import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(private form: FormBuilder) {}

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.form.group({
      id: [null],
      rua: [null],
      numero: [null],
      cep: [null],
      complemento: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      pais: [null],
    });
  }
}
