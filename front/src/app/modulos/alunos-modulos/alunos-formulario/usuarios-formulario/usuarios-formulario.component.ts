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

@Component({
  selector: 'app-usuarios-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './usuarios-formulario.component.html',
  styleUrls: ['./usuarios-formulario.component.scss'],
})
export class UsuariosFormularioComponent
  extends MetodosFormulariosComponent
  implements OnInit
{
  public formPermissoes!: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.criarFormulario();
    this.criarFormularioPermissoes();
  }

  public criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      usuario: [null],
      email: [null],
      senha: [null],
      permissoes: [null],
    });
  }

  public criarFormularioPermissoes(): void {
    this.formPermissoes = this.formBuilder.group({
      id: [null],
      nome: [null],
      descricao: [null],
      ativo: [null],
    });
  }
  public salvar() {
    const usuario: Usuario = this.obterDadosFormulario();
    const permissao: Permissao = this.formPermissoes.value;

    const dadosUsuario = new Usuario();
    dadosUsuario.ativo = usuario.ativo;
    dadosUsuario.email = usuario.email;
    dadosUsuario.senha = usuario.senha;
    dadosUsuario.id = usuario.id;
    dadosUsuario.usuario = usuario.usuario;

    dadosUsuario.permissoes = [];
    if (permissao) {
      dadosUsuario.permissoes.push(permissao);
    }

    this.usuariosService.criarNovo(dadosUsuario).subscribe((resultado) => {
      console.log('resultado:', resultado);
    });
  }
}
