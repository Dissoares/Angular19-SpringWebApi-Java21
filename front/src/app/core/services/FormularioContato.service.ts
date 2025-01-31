import { DadosPessoais } from '../models/dados-pessoais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioContatoService {
  private apiUrl = 'http://localhost:8080/api/dados-pessoais';

  constructor(private http: HttpClient) {}

  public getDadosPessoais(): Observable<DadosPessoais[]> {
    return this.http.get<DadosPessoais[]>(this.apiUrl);
  }

  public salvarDadosPessoais(dados: DadosPessoais): Observable<DadosPessoais> {
    console.log("dados:", dados)
    return this.http.post<DadosPessoais>(this.apiUrl, dados);
  }
}
