import { NotificacoesService } from 'app/core/services/notificacoes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Notificacao } from 'app/core/models/notificacao';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { WebSocketSubject } from 'rxjs/webSocket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  @Output() public ativarSidebar = new EventEmitter<void>();

  public qtdNotificacoes: number = 0;
  public notifications: Notificacao[] = [];
  private socket$ = new WebSocketSubject<Notificacao[]>(
    'ws://localhost:8080/ws/notificacoes'
  );

  constructor(private service: NotificacoesService) {}

  ngOnInit(): void {
    this.monitorarNotificacoes();
    this.atualizarNotificacoesEmTempoReal();
  }

  public onMenuClick() {
    this.ativarSidebar.emit();
  }

  public monitorarNotificacoes() {
    this.service.notificacoesList$.subscribe((notifs: Notificacao[]) => {
      this.notifications = notifs;
      this.qtdNotificacoes = notifs.length;
    });
    this.service.buscarNotificacoes();
  }

  public atualizarNotificacoesEmTempoReal() {
    this.service.atualizarNotificacoes([
      { id: 1, mensagem: 'Cadastro aguardando aprovação' },
      { id: 2, mensagem: 'Novo cadastro recebido' },
      { id: 3, mensagem: 'Novo cadastro recebido' },
    ]);
    this.socket$.subscribe({
      next: (notifs: Notificacao[]) => {
        this.service.atualizarNotificacoes(notifs);
      },
      error: (err) => console.error('Erro no WebSocket', err),
      complete: () => console.warn('Conexão encerrada'),
    });
  }
}
