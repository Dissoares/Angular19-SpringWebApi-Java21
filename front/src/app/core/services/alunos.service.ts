import { HttpClient } from '@angular/common/http';
import { environment } from 'environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models';
@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiUrl = environment.apiUrl;
  private endPointUrl = 'aluno';

  constructor(private http: HttpClient) {}

  public getAluno(): Observable<Aluno> {
    return this.http.get<Aluno>(this.apiUrl);
  }

  public salvarDadosPessoais(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(
      `${this.apiUrl}${this.endPointUrl}/cadastrar`,
      aluno
    );
  }

  public buscarPorId(idAluno: number): Observable<Aluno> {
    return this.http.get<Aluno>(
      `${this.apiUrl}${this.endPointUrl}/buscar/${idAluno}`
    );
  }

  public buscarTodos(): Observable<Array<Aluno>> {
    return this.http.get<Array<Aluno>>(
      `${this.apiUrl}${this.endPointUrl}/buscar-todos`
    );
  }

  public filtrar(filtro: any): Observable<Array<Aluno>> {
    return this.http.get<Array<Aluno>>(
      `${this.apiUrl}${this.endPointUrl}/filtrar`,
      { params: filtro }
    );
  }
}
