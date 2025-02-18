import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from '../../../../core/services/endereco.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ufsDoBrasil } from '../../../../core/config/ufs-brasil-const';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ViaCep } from '../../../../core/models/via-cep';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [
    MatAutocompleteModule,
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
  public listaEnderecos: Array<ViaCep> = [];

  constructor(
    private form: FormBuilder,
    private enderecoService: EnderecoService
  ) {}

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

  public buscarEnderecoPorCep(cep: string): void {
    this.listaEnderecos = [];
    if (cep && cep.length) {
      this.enderecoService
        .buscarEnderecoPorCep(cep)
        .subscribe((resultado: ViaCep) => {
          this.listaEnderecos = [resultado];
          this.formulario.patchValue({
            cep: resultado.cep,
            rua: resultado.logradouro,
            bairro: resultado.bairro,
            cidade: resultado.localidade,
            estado: resultado.uf,
            complemento: resultado.complemento,
          });

          if (ufsDoBrasil.includes(resultado.uf)) {
            this.formulario.patchValue({
              pais: 'Brasil',
            });
          }
        });
    }
  }
}
