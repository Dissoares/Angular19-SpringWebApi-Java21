import { MetodosFormulariosComponent } from 'app/shared/components/index.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PerfilPermissaoEnum } from 'app/core/enums/perfil-permissao.enum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.scss'],
})
export class UsuarioFormularioComponent
  extends MetodosFormulariosComponent
  implements OnInit
{
  public formPermissoes!: FormGroup;
  public perfilPermissaoEnum = PerfilPermissaoEnum.getAllValues();

  constructor() {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.criarFormulario();
  }

  public criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      idUsuario: [null],
      nomeUsuario: [null, this.ehCampoObrigatorio()],
      email: [null],
      senha: [null, this.ehCampoObrigatorio()],
      perfilPermissao: [null, this.ehCampoObrigatorio()],
      repitaSenha: [null, this.ehCampoObrigatorio()],
    });
  }
}
