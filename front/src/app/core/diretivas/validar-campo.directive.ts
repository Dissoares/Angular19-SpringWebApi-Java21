import { Directive, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[AtualizarCampoDiretiva]',
})
export class AtualizaCamposFormulariosDiretiva {
  constructor(@Optional() private ngControl: NgControl) {}

  @HostListener('blur')
  public onBlur() {
    if (this.ngControl.control) {
      this.ngControl.control.markAsTouched();
      this.ngControl.control.updateValueAndValidity();
    }
  }
}
