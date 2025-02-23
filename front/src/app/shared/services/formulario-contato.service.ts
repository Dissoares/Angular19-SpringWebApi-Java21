import { DadosPessoais } from '../../core/models/dados-pessoais';
import { DadosFormularioDto } from '../../core/dtos';
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

  public salvarDadosPessoais(dados: DadosFormularioDto): Observable<DadosFormularioDto> {
    return this.http.post<DadosFormularioDto>(this.apiUrl, dados);
  }
}
