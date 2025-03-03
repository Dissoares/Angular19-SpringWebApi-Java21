import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FiltroDto } from 'app/core/dtos/filtro-dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './alunos-filtro.component.html',
  styleUrls: ['./alunos-filtro.component.scss'],
})
export class AlunosFiltroComponent implements OnInit {
  public formulario!: FormGroup;

  @Output() dadosFiltro = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.inciarFormulario();
  }

  public inciarFormulario(): void {
    this.formulario = this.fb.group({
      nome: [null],
      cpf: [null],
      dataNascimento: [null],
      sexo: [null],
      estadoCivil: [null],
      naturalidade: [null],
      email: [null],
      telefone: [null],
      endereco: [null],
      ativo: [null],
    });
  }

  public pesquisar(): void {
    const aluno: FiltroDto = this.formulario.value;
    this.dadosFiltro.emit(aluno);
  }

  public limparFiltros(): void {
    this.formulario.reset();
  }
}
