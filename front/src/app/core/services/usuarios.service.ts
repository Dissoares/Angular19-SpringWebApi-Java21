import { Aluno, Notificacao, Usuario } from '../models';
import { GlobalService } from './global.service';
import { environment } from 'environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl = environment.apiUrl;
  private endPointUrl = 'usuario';

  constructor(private serviceGlobal: GlobalService) {}

  public atualizarUsuario(idUsuario: number) {
    this.serviceGlobal.put<Notificacao>(
      `${this.apiUrl}/${this.endPointUrl}/atualizar/${idUsuario}`,
      {}
    );
  }

  public buscarTodos(): Observable<Usuario[]> {
    return this.serviceGlobal.get<Usuario[]>(`${this.apiUrl}`);
  }

  public buscarPor(id: number): Observable<Usuario> {
    return this.serviceGlobal.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  public criarNovo(dadosUsuario: Usuario): Observable<Usuario> {
    return this.serviceGlobal.post<Usuario>(
      `${this.apiUrl}${this.endPointUrl}/criar`,
      dadosUsuario
    );
  }

  public atualizar(id: number, userData: Usuario): Observable<Usuario> {
    return this.serviceGlobal.put<Usuario>(`${this.apiUrl}/${id}`, userData);
  }

  public excluir(id: number): Observable<Usuario> {
    return this.serviceGlobal.delete<Usuario>(`${this.apiUrl}/${id}`);
  }

  public login(usuario: Usuario): Observable<Aluno> {
    return this.serviceGlobal.post<Aluno>(
      `${this.apiUrl}${this.endPointUrl}/logar`,
      usuario
    );
  }
}
