import { Component, inject, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { FormularioContatoService } from '../../core/services/formulario-contato.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DadosFormularioDto } from '../../core/dtos';
import { DadosPessoais } from '../../core/models';

@Component({
  selector: 'app-confirmar-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmar-dialog.component.html',
  styleUrls: ['./confirmar-dialog.component.scss'],
})
export class ConfirmarDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConfirmarDialogComponent>);
  private snackBarService = inject(MatSnackBar);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dadosDoFormulario: DadosFormularioDto,
    private formularioContatoService: FormularioContatoService
  ) {}

  ngOnInit() {}

  public salvarDados(): void {
    this.formularioContatoService
      .salvarDadosPessoais(this.dadosDoFormulario)
      .subscribe(
        (resposta: DadosFormularioDto) => {
          console.log(resposta);
          this.snackBarService.open('Dados enviados com sucesso!', 'Sucesso!');
          this.dialogRef.close();
        },
        (erro: any) => {
          this.snackBarService.open(
            `Erro ao enviar os dados: ${erro.message || erro}`,
            'Erro'
          );
          this.dialogRef.close();
        }
      );
  }

  public fecharDialogo(): void {
    this.dialogRef.close();
  }
}
