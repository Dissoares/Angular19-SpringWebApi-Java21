import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class GlobalServiceValuesChanges {
  private formularioSubject = new BehaviorSubject<any>(null);

  constructor() {}

  public monitorarFormulario(formulario: FormGroup): void {
    formulario.valueChanges.subscribe((dados) => {
      this.formularioSubject.next(dados);
    });
  }

  public obterDados(): Observable<any> {
    return this.formularioSubject.asObservable();
  }
}
