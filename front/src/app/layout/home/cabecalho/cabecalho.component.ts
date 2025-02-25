import { NotificacoesService } from 'app/core/services/notificacoes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Notificacao } from 'app/core/models/notificacao';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  @Output() public ativarSidebar = new EventEmitter<void>();

  public listaNotificacoes: Notificacao[] = [];
  public ocultarNotificacao: Boolean = false;
  public totalNotificacoes: number = 0;

  constructor(
    private service: NotificacoesService
  ) {}

  ngOnInit(): void {
    this.monitorarNotificacoes();
  }

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
