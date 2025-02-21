import { ErrosCamposFormularioComponent } from '../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import { EnderecoService } from '../../../core/services/endereco.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ufsDoBrasil } from '../../../core/config/ufs-brasil-const';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ViaCep } from '../../../core/models/via-cep';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [
    ErrosCamposFormularioComponent,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './dados-endereco.component.html',
  styleUrls: ['./dados-endereco.component.scss'],
})
export class DadosEnderecoComponent implements OnInit {
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
      cep: [null, Validators.required],
      tipoLogradouro: [null, Validators.required],
      logradouro: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      pais: [{ value: 'Brasil', disabled: true }],
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
            logradouro: resultado.logradouro,
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
