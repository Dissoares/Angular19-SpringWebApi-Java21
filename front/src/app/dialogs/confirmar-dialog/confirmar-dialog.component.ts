import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import {
  Component,
  inject,
  OnInit,
  Inject,
} from '@angular/core';
import { SnackBarPersonalizadoService } from '../../core/services/index.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlunosService } from '../../core/services/alunos.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Aluno } from 'app/core/models';
import { Rotas } from 'app/core/enums';
import { timer } from 'rxjs';
@Component({
  selector: 'app-confirmar-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './confirmar-dialog.component.html',
  styleUrls: ['./confirmar-dialog.component.scss'],
})
export class ConfirmarDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConfirmarDialogComponent>);
  readonly spinnerDialog = inject(MatDialog);
  private snackBarService = inject(SnackBarPersonalizadoService);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public Aluno: Aluno,
    private alunosService: AlunosService,
    private router: Router
  ) {}

  ngOnInit() {}

  public salvarDados(): void {
    this.alunosService.salvarDadosPessoais(this.Aluno).subscribe({
      next: (aluno: Aluno) => {
        this.snackBarService.abrirSnackBar('Cadastro concuído!.', 'Sucesso');
        timer(1000).subscribe(() => {
          this.fecharDialogo();
        });

        this.redirecionarParaOutraRota(aluno);
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

  public redirecionarParaOutraRota(aluno: Aluno): void {
    timer(5000).subscribe(() => {
      this.router.navigate([Rotas.SISTEMA.alunos.LISTAGEM], {
        queryParams: {
          idAluno: aluno.dadosPessoais.id,
        },
      });
    });
  }

  public fecharDialogo(): void {
    this.dialogRef.close();
  }
}
