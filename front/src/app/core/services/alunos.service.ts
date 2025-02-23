import { DadosPessoais } from '../models/dados-pessoais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlunoDto } from 'app/core/dtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private apiUrl = 'http://localhost:8080/api/dados-pessoais';

  constructor(private http: HttpClient) {}

  public getDadosPessoais(): Observable<DadosPessoais[]> {
    return this.http.get<DadosPessoais[]>(this.apiUrl);
  }

  public salvarDadosPessoais(dados: AlunoDto): Observable<AlunoDto> {
    return this.http.post<AlunoDto>(this.apiUrl, dados);
  }
}
