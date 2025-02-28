import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validarNumeros(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;

    if (valor && isNaN(valor)) {
      return { numeroInvalido: true };
    }
    return null;
  };
}
