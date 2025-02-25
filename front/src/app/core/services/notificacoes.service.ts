import { Notificacao } from '../models/notificacao';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { environment } from 'environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NotificacoesService implements OnInit {
  private listaNotificacoes = new BehaviorSubject<Notificacao[]>([]);
  public listaNotificacoes$ = this.listaNotificacoes.asObservable();
  private apiUrl = environment.apiUrl;
  private endPointUrl = 'notificacoes';

  constructor(private serviceGlobal: GlobalService) {}

  ngOnInit(): void {}

  public atualizarNotificacoes(notificacoes: Notificacao[]) {
    this.listaNotificacoes.next(notificacoes);
  }

  public async buscarNotificacoes(idAluno: number) {
    try {
      const dados = await this.serviceGlobal.get<Notificacao[]>(
        `${this.apiUrl}/${this.endPointUrl}/buscar-por-id/${idAluno}`
      );
      this.atualizarNotificacoes(dados);
    } catch (error) {
      console.error('Erro', error);
    }
  }

  public marcarNotificacaoComoLida(idNotificacao: number) {
    this.serviceGlobal.put<Notificacao>(
      `${this.apiUrl}/${this.endPointUrl}/marcar-como-lida/${idNotificacao}`,
      {}
    );
  }
}
