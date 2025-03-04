import { MetodosFormulariosComponent } from 'app/shared/components/index.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from 'app/core/services/usuarios.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Permissao } from 'app/core/models/permissao';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from 'app/core/models';
import { PerfilEnum } from 'app/core/enums/tipo-perfil.enum';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatSelectModule,
  ],
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.scss'],
})
export class UsuarioFormularioComponent
  extends MetodosFormulariosComponent
  implements OnInit
{
  public formPermissoes!: FormGroup;
  public perfilEnum = PerfilEnum.getAllValues();

  constructor(private usuariosService: UsuariosService) {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.criarFormulario();
  }

  public criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      nomeUsuario: [null, this.ehCampoObrigatorio()],
      senha: [null, this.ehCampoObrigatorio()],
      repitaSenha: [null, this.ehCampoObrigatorio()],
      perfil: [null, this.ehCampoObrigatorio()],
    });
  }
}
