import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private carregandoDados = new BehaviorSubject<boolean>(false);
  public dadosCarregados$ = this.carregandoDados.asObservable();

  public mostrarSpinner() {
    this.carregandoDados.next(true);
  }

  public ocultarSpinner() {
    this.carregandoDados.next(false);
  }
}
