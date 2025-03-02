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

  public salvarDadosPessoais(dados: Aluno): Observable<Aluno> {
    // console.log('Dados antes do envio:', JSON.stringify(dados));
    return this.http.post<Aluno>(this.apiUrl, dados);
  }

  public buscarPorId(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(
      `${this.apiUrl}${this.endPointUrl}/buscar-por/${id}`
    );
  }
}
