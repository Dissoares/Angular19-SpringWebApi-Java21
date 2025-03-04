import { Component } from '@angular/core';
import {
  ValidationErrors,
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-metodos-formularios',
  standalone: true,
  imports: [],
  templateUrl: './metodos-formularios.component.html',
  styleUrls: ['./metodos-formularios.component.scss'],
})
export class MetodosFormulariosComponent {
  public formulario!: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({});
  }

  private obterCampo(campo: string): AbstractControl {
    const formControl = this.formulario.get(campo);
    if (!formControl) {
      throw new Error(`O campo '${campo}' não existe.`);
    }
    return formControl;
  }

  public obterDadosFormulario() {
    return this.formulario.value;
  }

  public ehFormularioValido() {
    return this.formulario.valid;
  }

  public limparFormulario() {
    this.formulario.reset();
  }

  public atualizarTodosOsCampos() {
    this.formulario.updateValueAndValidity();
  }

  public marcarFormularioComoTocado() {
    this.formulario.markAllAsTouched();
  }

  public marcarFormularioComoNaoTocado() {
    this.formulario.markAsUntouched();
  }

  public atualizarCampo(campo: string) {
    this.obterCampo(campo)?.updateValueAndValidity();
  }

  public limparCampo(campo: string) {
    this.obterCampo(campo)?.reset();
  }

  public marcarCampoComoTocado(campo: string) {
    this.obterCampo(campo)?.markAsTouched();
  }

  public marcarCampoComoNaoTocado(campo: string) {
    this.obterCampo(campo)?.markAsUntouched();
  }

  public desativarCampo(campo: string) {
    this.obterCampo(campo)?.disable();
  }

  public ativarCampo(campo: string) {
    this.obterCampo(campo)?.enable();
  }

  public inserirDadosNoCampo(campo: string, dados: any) {
    this.obterCampo(campo).setValue(dados);
  }

  public obterDadosDoCampo(campo: string) {
    return this.obterCampo(campo)?.value;
  }

  public validarEmail(): ValidatorFn {
    return (formControl: AbstractControl): ValidationErrors | null => {
      if (!formControl.value) return null;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const emailValido = emailRegex.test(formControl.value);

      return emailValido ? null : { emailInvalido: true };
    };
  }

  public confirmarEmail(): ValidatorFn {
    return (formControl: AbstractControl): ValidationErrors | null => {
      if (!formControl.dirty && !formControl.touched) {
        return null;
      }

      if (!formControl.parent) return null;

      const dadosFormulario = formControl.parent;

      const email: string = dadosFormulario?.value.email?.trim() || '';
      const confirmacaoEmail: string =
        dadosFormulario?.value.confirmacaoEmail?.trim() || '';

      if (!email || !confirmacaoEmail) return null;
      if (email.toLowerCase() === confirmacaoEmail.toLowerCase()) {
        return null;
      }
      return { emailsNaoCoincidem: true };
    };
  }

  public ehCampoObrigatorio(): ValidatorFn {
    return (formControl: AbstractControl): ValidationErrors | null => {
      if (!formControl) return null;

      return formControl.value ? null : { campoObrigatorio: true };
    };
  }
}
