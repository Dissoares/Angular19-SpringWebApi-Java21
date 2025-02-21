import { ErrosCamposFormularioComponent } from '../../../core/components/erros-campos-formulario/erros-campos-formulario.component';
import { confirmacaoEmail } from '../../../validators/email-duplicado.validator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TipoTelefoneEnum } from '../../../core/enums';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ErrosCamposFormularioComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './dados-contato.component.html',
  styleUrls: ['./dados-contato.component.scss'],
})
export class DadosContatoComponent implements OnInit {
  public formulario!: FormGroup;
  public tipoTelefoneEnum = TipoTelefoneEnum.getAllValues();

  constructor(private form: FormBuilder) {}

  ngOnInit() {
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.formulario = this.form.group({
      id: [null],
      email: [null, [Validators.required, Validators.email]],
      confirmacaoEmail: [
        null,
        [Validators.required, Validators.email, confirmacaoEmail()],
      ],
      tipoTelefone: [null, Validators.required],
      numeroTelefone: [null, Validators.required],
    });
  }
}
