import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SnackBarPersonalizadoService } from '../../core/services/index.service';
import { AlunosService } from '../../core/services/alunos.service';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Aluno } from 'app/core/models';
import { Rotas } from 'app/core/enums';
import { timer } from 'rxjs';
@Component({
  selector: 'app-confirmar-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './confirmar-dialog.component.html',
  styleUrls: ['./confirmar-dialog.component.scss'],
})
export class ConfirmarDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConfirmarDialogComponent>);
  readonly dadosAluno = inject<Aluno>(MAT_DIALOG_DATA);
  private snackBarService = inject(SnackBarPersonalizadoService);

  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  public salvarDados(): void {
    this.alunosService.salvarDadosPessoais(this.dadosAluno).subscribe({
      next: (aluno: Aluno) => {
        this.toastr.error('Cadastro concuído!', 'Sucesso!');
        timer(1000).subscribe(() => {
          this.fecharDialogo();
        });

        this.redirecionarParaOutraRota(aluno);
      },
      error: (erro: HttpErrorResponse) => {
        const tipoErro = erro.error?.message;

        if (tipoErro.includes('EmailDuplicado')) {
          this.toastr.error('Email já cadastrado!', 'Erro!');
          this.fecharDialogo();
          return;
        }

        if (tipoErro.includes('CpfDuplicado')) {
          this.toastr.error('Cpf já cadastrado!', 'Erro!');
          this.fecharDialogo();
          return;
        }
      },
    });
  }

  public redirecionarParaOutraRota(aluno: Aluno): void {
    this.snackBarService.abrirSnackBar('Redirecionando...', 'Sucesso!');
    timer(5000).subscribe(() => {
      this.router.navigate([Rotas.SISTEMA.alunos.LISTAGEM], {
        queryParams: {
          idAluno: aluno.idAluno,
        },
      });
    });
  }

  public fecharDialogo(): void {
    this.dialogRef.close();
  }
}
