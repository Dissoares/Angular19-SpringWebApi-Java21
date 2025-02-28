import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SnackBarPersonalizadoService } from '../../core/services/index.service';
import { AlunosService } from '../../core/services/alunos.service';
import { Component, inject, OnInit, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
import { Aluno } from 'app/core/models';

@Component({
  selector: 'app-confirmar-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirmar-dialog.component.html',
  styleUrls: ['./confirmar-dialog.component.scss'],
})
export class ConfirmarDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConfirmarDialogComponent>);
  private snackBarService = inject(SnackBarPersonalizadoService);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public Aluno: Aluno,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {}

  public salvarDados(): void {
    this.alunosService.salvarDadosPessoais(this.Aluno).subscribe({
      next: () => {
        this.snackBarService.abrirSnackBar('Cadastro concuído!.', 'Sucesso');
        this.fecharDialogo();
      },
      error: (erro: HttpErrorResponse) => {
        const tipoErro = erro.error?.message;

        if (tipoErro.includes('EmailDuplicado')) {
          this.snackBarService.abrirSnackBar('Email já cadastrado!', 'Erro');
          this.fecharDialogo();
          return;
        }

        if (tipoErro.includes('CpfDuplicado')) {
          this.snackBarService.abrirSnackBar('Cpf já cadastrado!', 'Erro');
          this.fecharDialogo();
          return;
        }
      },
    });
  }

  public fecharDialogo(): void {
    this.dialogRef.close();
  }
}
