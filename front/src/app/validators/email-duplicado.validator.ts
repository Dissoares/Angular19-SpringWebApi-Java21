import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmacaoEmail(): ValidatorFn {
  return (formsControl: AbstractControl): ValidationErrors | null => {
    const dadosFormulario = formsControl ? formsControl.parent : null;

    const email: string = dadosFormulario?.value.email;
    const confirmacaoEmail: string = dadosFormulario?.value.confirmacaoEmail;

    return email === confirmacaoEmail ? null : { emailNaoCoincidem: true };
  };
}
