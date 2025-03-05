import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackBarPersonalizadoService {
  constructor(private snackBar: MatSnackBar) {}

  public abrirSnackBar(mensagem: string, tipo: 'Sucesso!' | 'Erro!' | 'Aviso!') {
    let panelClass = '';

    switch (tipo) {
      case 'Sucesso!':
        panelClass = 'success-snackbar';
        break;
      case 'Erro!':
        panelClass = 'error-snackbar';
        break;
      case 'Aviso!':
        panelClass = 'warning-snackbar';
        break;
    }

    if (panelClass.length > 3) {
      this.snackBar.open(mensagem, 'Fechar', {
        duration: 3000,
        panelClass: [panelClass],
      });
    }
  }
}
