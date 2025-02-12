import {
  Component,
  inject,
  OnInit,
  Inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormularioContatoService } from '../../../../core/services/formulario-contato.service';
import { DadosPessoais } from '../../../../core/models/dados-pessoais';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public dadosDoFormulario: DadosPessoais,
    private formularioContatoService: FormularioContatoService
  ) {}

  ngOnInit() {}

  public salvarDados(): void {
    const dados: DadosPessoais = this.dadosDoFormulario;

    if (!dados.nome || !dados.email || !dados.cpf) {
      this.snackBarService.open(
        'Preencha todos os campos obrigatórios do formulário',
        'Erro',
        { duration: 3000 }
      );
      this.dialogRef.close();
      return;
    }

    this.formularioContatoService.salvarDadosPessoais(dados).subscribe(
      (resposta: DadosPessoais) => {
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
