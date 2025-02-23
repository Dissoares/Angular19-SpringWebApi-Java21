import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViaCep } from '../../core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  public buscarEnderecoPorCep(cepNumero: string): Observable<ViaCep> {
    if (cepNumero && cepNumero.length < 8) {
      return new Observable();
    }
    return this.http.get<ViaCep>(`https://viacep.com.br/ws/${cepNumero}/json`);
  }
}
