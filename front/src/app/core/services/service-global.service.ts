import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

type FormularioDados = Record<string, unknown>;

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceValuesChanges {
  private formularioSubject = new BehaviorSubject<FormularioDados | null>(null);

  public monitorarFormulario(formulario: FormGroup): void {
    formulario.valueChanges.subscribe((dados: FormularioDados) => {
      this.formularioSubject.next(dados);
    });
  }

  public obterDados(): Observable<FormularioDados | null> {
    return this.formularioSubject.asObservable();
  }
}
