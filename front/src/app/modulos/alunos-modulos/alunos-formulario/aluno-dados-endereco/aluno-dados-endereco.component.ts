import {
  ErrosCamposFormularioComponent,
  MetodosFormulariosComponent,
} from 'app/shared/components/index.component';
import { validarNumeros } from 'app/shared/validators/numero.validator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EnderecoService } from 'app/core/services/index.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ufsDoBrasil } from 'app/shared/config/ufs-brasil-const';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViaCep } from 'app/core/models';

@Component({
  selector: 'app-aluno-dados-endereco',
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
  templateUrl: './aluno-dados-endereco.component.html',
  styleUrls: ['./aluno-dados-endereco.component.scss'],
})
export class AlunoDadosEnderecoComponent
  extends MetodosFormulariosComponent
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
      numero: [null, validarNumeros()],
      complemento: [null],
      bairro: [null, this.ehCampoObrigatorio()],
      cidade: [null, this.ehCampoObrigatorio()],
      estado: [null, this.ehCampoObrigatorio()]
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
