import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { AlunosService } from '../../shared/services/alunos.service';
import { SnackBarPersonalizadoService } from '../../shared/services/index.service';
import { Component, inject, OnInit, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AlunoDto } from 'app/core/dtos';

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
    public alunoDto: AlunoDto,
    private alunosService: AlunosService
  ) {}

  ngOnInit() {}

  public salvarDados(): void {
    this.alunosService.salvarDadosPessoais(this.alunoDto).subscribe(
      (resposta: AlunoDto) => {
        console.log(resposta);
        this.snackBarService.abrirSnackBar(
          'Dados enviados com sucesso!',
          'Sucesso'
        );
        this.dialogRef.close();
      },
      (erro: any) => {
        this.snackBarService.abrirSnackBar(
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
