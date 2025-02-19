import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'exibir-erro',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule],
  templateUrl: './erros-campos-formulario.component.html',
  styleUrls: ['./erros-campos-formulario.component.scss'],
})
export class ErrosCamposFormularioComponent {
  @Input() campo!: AbstractControl | FormControl | null;
  public campoVazio = new FormControl();

  public getMensagemDeErro(erro: ValidationErrors | null | undefined): string {
    if (!erro) return '';
    if (erro['required']) return 'Campo obrigatório';
    if (erro['email']) return 'E-mail inválido';
    if (erro['cpfInvalid']) return 'CPF inválido';
    return 'Erro desconhecido';
  }
  
}
