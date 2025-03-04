import { AlunoDadosPessoaisComponent } from './aluno-dados-pessoais/aluno-dados-pessoais.component';
import { AlunoDadosEnderecoComponent } from './aluno-dados-endereco/aluno-dados-endereco.component';
import { ConfirmarDialogComponent } from 'app/dialogs/confirmar-dialog/confirmar-dialog.component';
import { AlunoDadosContatoComponent } from './aluno-dados-contato/aluno-dados-contato.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import {
  DadosEndereco,
  DadosPessoais,
  DadosContato,
  Usuario,
  Aluno,
} from 'app/core/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-alunos-formulario',
  standalone: true,
  imports: [
    AlunoDadosPessoaisComponent,
    AlunoDadosEnderecoComponent,
    AlunoDadosContatoComponent,
    UsuarioFormularioComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    RouterModule,
    ToastrModule,
  ],
  templateUrl: './alunos-formulario.component.html',
  styleUrls: ['./alunos-formulario.component.css'],
})
export class AlunosFormularioComponent implements OnInit {
  @ViewChild(UsuarioFormularioComponent)
  public alunoDadosUsuario!: UsuarioFormularioComponent;

  @ViewChild(AlunoDadosPessoaisComponent)
  public alunoDadosPessoais!: AlunoDadosPessoaisComponent;

  @ViewChild(AlunoDadosEnderecoComponent)
  public alunoDadosEndereco!: AlunoDadosEnderecoComponent;

  @ViewChild(AlunoDadosContatoComponent)
  public alunoDadosContato!: AlunoDadosContatoComponent;

  readonly dialog = inject(MatDialog);
  public ativarBotao: boolean = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  public abrirDialogoSalvar(): void {
    const dadosPessoais: DadosPessoais =
      this.alunoDadosPessoais.obterDadosFormulario();
    const dadosEndereco: DadosEndereco =
      this.alunoDadosEndereco.obterDadosFormulario();
    const dadosContato: DadosContato =
      this.alunoDadosContato.obterDadosFormulario();
    const dadosUsuario: Usuario = this.alunoDadosUsuario.obterDadosUsuario();

    const dadosAluno = new Aluno();
    dadosAluno.dadosPessoais = dadosPessoais;
    dadosAluno.dadosPessoais.endereco = dadosEndereco;
    dadosAluno.dadosPessoais.contato = dadosContato;
    dadosAluno.usuario = dadosUsuario;

    if (!this.alunoDadosUsuario.ehFormularioValido()) {
      this.alunoDadosUsuario.marcarFormularioComoTocado();
      this.toastr.error('Preencha todos os dados de usuário.', 'Erro!');
      return;
    }

    if (!this.alunoDadosPessoais.ehFormularioValido()) {
      this.alunoDadosPessoais.marcarFormularioComoTocado();
      this.toastr.error('Preencha todos os dados pessoais.', 'Erro!');
      return;
    }

    if (!this.alunoDadosContato.ehFormularioValido()) {
      this.alunoDadosContato.marcarFormularioComoTocado();
      this.toastr.error('Preencha todos os dados de contato.', 'Erro!');
      return;
    }

    if (!this.alunoDadosEndereco.ehFormularioValido()) {
      this.alunoDadosEndereco.marcarFormularioComoTocado();
      this.toastr.error('Preencha todos os dados de endereço.', 'Erro!');
      return;
    }

    this.dialog.open<ConfirmarDialogComponent>(ConfirmarDialogComponent, {
      width: '350px',
      height: '350px',
      data: dadosAluno,
    });
  }

  public limparFormulario(): void {
    this.alunoDadosUsuario.limparFormulario();
    this.alunoDadosPessoais.limparFormulario();
    this.alunoDadosEndereco.limparFormulario();
    this.alunoDadosContato.limparFormulario();
  }
}
