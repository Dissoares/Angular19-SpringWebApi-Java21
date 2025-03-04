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

  constructor(private serviceGlobal: GlobalService, private http: HttpClient) {}

  ngOnInit(): void {
  }

  public atualizarNotificacoes(notificacoes: Notificacao[]) {
    this.listaNotificacoes.next(notificacoes);
  }

  public buscarNotificacoes(idAluno: number) {
    this.http
      .get<Notificacao[]>(
        `${this.apiUrl}/${this.endPointUrl}/buscar-por/${idAluno}`
      )
      .subscribe((dados) => {
        this.atualizarNotificacoes(dados);
      });
  }

  public marcarNotificacaoComoLida(idNotificacao: number) {
    this.serviceGlobal.put<Notificacao>(
      `${this.apiUrl}/${this.endPointUrl}/lida/${idNotificacao}`,
      {}
    );
  }
}
