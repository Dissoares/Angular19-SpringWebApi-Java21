import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosCamposFormularioComponent } from '../../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import { FormulariosValidatorBase } from '../../../../core/components/formularios-validator-base/formularios-validator-base.component';
import { ViaCep } from '../../../../core/models';
import { EnderecoService } from '../../../../core/services';
import { ufsDoBrasil } from '../../../../core/config/ufs-brasil-const';

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
export class DadosEnderecoComponent
  extends FormulariosValidatorBase
  implements OnInit
{
  public listaEnderecos: Array<ViaCep> = [];

  constructor(private enderecoService: EnderecoService) {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      cep: [null, this.ehCampoObrigatorio()],
      tipoLogradouro: [null, this.ehCampoObrigatorio()],
      logradouro: [null, this.ehCampoObrigatorio()],
      numero: [null, this.ehCampoObrigatorio()],
      complemento: [null, this.ehCampoObrigatorio()],
      bairro: [null, this.ehCampoObrigatorio()],
      cidade: [null, this.ehCampoObrigatorio()],
      estado: [null, this.ehCampoObrigatorio()],
      pais: [{ value: 'Brasil', disabled: true }],
    });
  }

  public buscarEnderecoPorCep(cep: string): void {
    this.listaEnderecos = [];
    if (cep && cep.length) {
      this.enderecoService
        .buscarEnderecoPorCep(cep)
        .subscribe((endereco: ViaCep) => {
          this.listaEnderecos = [endereco];
          this.formulario.patchValue({
            cep: endereco.cep,
            tipoLogradouro: this.getTipoLogradouro(endereco.logradouro),
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            cidade: endereco.localidade,
            estado: endereco.uf,
            complemento: endereco.complemento,
          });

          if (ufsDoBrasil.includes(endereco.uf)) {
            this.formulario.patchValue({
              pais: 'Brasil',
            });
          }
        });
    }
  }

  public getTipoLogradouro(tipoLogradouro: string): string {
    return tipoLogradouro.trim().split(' ')[0];
  }
}
