import { DadosPessoais } from '../models/dados-pessoais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiUrl = 'http://localhost:8080/api/dados-pessoais';

  constructor(private http: HttpClient) {}

  public getDadosPessoais(): Observable<DadosPessoais[]> {
    return this.http.get<DadosPessoais[]>(this.apiUrl);
  }

  public salvarDadosPessoais(dados: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, dados);
  }
}
