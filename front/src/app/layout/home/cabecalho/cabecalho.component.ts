import { MetodosFormulariosComponent } from 'app/shared/components/index.component';
import { NotificacoesService } from 'app/core/services/notificacoes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'app/core/services/usuarios.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Notificacao } from 'app/core/models/notificacao';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Aluno, Usuario } from 'app/core/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent
  extends MetodosFormulariosComponent
  implements OnInit
{
  @Output() public ativarSidebar = new EventEmitter<void>();

  public listaNotificacoes: Array<Notificacao> = [];
  public ocultarNotificacao: Boolean = false;
  public totalNotificacoes: number = 0;

  constructor(
    private service: NotificacoesService,
    private usuarioService: UsuariosService
  ) {
    super(new FormBuilder());
  }

  ngOnInit(): void {
    this.criarFormulario();
    this.service.buscarNotificacoes(2);
    this.monitorarNotificacoes();
  }

  public criarFormulario() {
    this.formulario = this.formBuilder.group({
      emailOuCpf: [null],
      senha: [null],
    });
  }

  public fazerLogin() {
    const usuario: Usuario = this.formulario.value;
    this.usuarioService.login(usuario).subscribe((aluno: Aluno) => {
    });
  }

  public recuperarSenha() {}

  public aoClicarNoMenu() {
    this.ativarSidebar.emit();
  }

  public monitorarNotificacoes() {
    this.service.listaNotificacoes$.subscribe(
      (arrayNotificacoes: Notificacao[]) => {
        this.listaNotificacoes = arrayNotificacoes;
        this.totalNotificacoes = arrayNotificacoes.length;
      }
    );
  }

  public marcarComoLida(idNotificacao: number) {
    this.listaNotificacoes = this.listaNotificacoes.filter(
      (notificacao) => notificacao.id !== idNotificacao
    );
    this.totalNotificacoes = this.listaNotificacoes.length;
    this.service.marcarNotificacaoComoLida(idNotificacao);
  }
}
