import { Component } from '@angular/core';
import {
  ValidationErrors,
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-base',
  templateUrl: './formulario-base.component.html',
  styleUrls: ['./formulario-base.component.scss'],
})
export class validadorBase {
  public formulario!: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({});
  }

  private obterControle(campo: string): AbstractControl | null {
    return this.formulario.get(campo);
  }

  public limparFormulario() {
    this.formulario.reset();
  }

  public validarFormulario() {
    return this.formulario.valid;
  }
  public validarCampo(campo: string) {
    this.obterControle(campo)?.updateValueAndValidity();
  }

  public obterDadosFormulario() {
    return this.formulario.value;
  }

  public limparCampo(campo: string) {
    this.obterControle(campo)?.reset();
  }

  public marcarCampoComoTocado(campo: string) {
    this.obterControle(campo)?.markAsTouched();
  }

  public marcarCampoComoNaoTocado(campo: string) {
    this.obterControle(campo)?.markAsUntouched();
  }

  public desativarCampo(campo: string) {
    this.obterControle(campo)?.disable();
  }

  public ativarCampo(campo: string) {
    this.obterControle(campo)?.enable();
  }

  public validarEmail(): ValidatorFn {
    return (
      ControlesDeFormularios: AbstractControl
    ): ValidationErrors | null => {
      if (!ControlesDeFormularios.value) return null;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const emailValido = emailRegex.test(ControlesDeFormularios.value);

      return emailValido ? null : { emailInvalido: true };
    };
  }

  public confirmarEmail(): ValidatorFn {
    return (controle: AbstractControl): ValidationErrors | null => {
      if (!controle.dirty && !controle.touched) {
        return null;
      }

      if (!controle.parent) return null;

      const dadosFormulario = controle.parent;

      const email: string = dadosFormulario?.value.email?.trim() || '';
      const confirmacaoEmail: string =
        dadosFormulario?.value.confirmacaoEmail?.trim() || '';

      if (!email || !confirmacaoEmail) return null;
      if (email.toLowerCase() === confirmacaoEmail.toLowerCase()) {
        return null;
      }
      console.log('emal', email, confirmacaoEmail);
      return { emailsNaoCoincidem: true };
    };
  }

  public ehCampoObrigatorio(): ValidatorFn {
    return (
      ControlesDeFormularios: AbstractControl
    ): ValidationErrors | null => {
      if (!ControlesDeFormularios.dirty && !ControlesDeFormularios.touched)
        return null;
      return ControlesDeFormularios?.value ? null : { campoObrigatorio: true };
    };
  }
}
