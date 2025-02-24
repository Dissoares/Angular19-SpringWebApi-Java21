import { Notificacao } from '../models/notificacao';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NotificacoesService implements OnInit {
  private apiUrl = environment.apiUrl;
  private notificacoesList = new BehaviorSubject<Notificacao[]>([]);
  public notificacoesList$ = this.notificacoesList.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public atualizarNotificacoes(notificacoes: Notificacao[]) {
    this.notificacoesList.next(notificacoes);
  }

  public buscarNotificacoes() {
    this.http
      .get<Notificacao[]>(`${this.apiUrl}/notificacoes/buscar-todas`)
      .pipe(
        tap((notifs: Notificacao[]) => {
          this.atualizarNotificacoes(notifs);
        })
      )
      .subscribe();
  }
}
