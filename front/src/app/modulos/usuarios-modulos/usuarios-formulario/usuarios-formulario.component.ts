import { MetodosFormulariosComponent } from 'app/shared/components/index.component';
import { UsuariosService } from 'app/core/services/usuarios.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  constructor(private usuariosService: UsuariosService) {
    super(new FormBuilder());
  }

  ngOnInit() {
    this.criarFormulario();
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

  public salvar() {
    const usuario = this.obterDadosFormulario();
    usuario.permissoes = null;
    this.usuariosService.criarNovo(usuario).subscribe((resultado) => {
      console.log('resultado:', resultado);
    });
  }
}
