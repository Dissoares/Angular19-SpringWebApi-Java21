import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Rotas } from 'app/core/enums';
import { timer } from 'rxjs';
@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatDividerModule,
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent implements OnInit {
  public menu!: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.definirMenuAtivo();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.definirMenuAtivo();
      }
    });
  }

  public ativarMenu(posicao: number) {
    this.menu = posicao;
    this.navegarParaRota(posicao);
  }

  public navegarParaRota(posicaoRota: number) {
    const rotas = [
      Rotas.SISTEMA.alunos.FORMULARIO,
      Rotas.SISTEMA.alunos.LISTAGEM,
      Rotas.SISTEMA.usuario.FORMULARIO,
      Rotas.SISTEMA.usuario.LISTAGEM,
    ];

    timer(100).subscribe(() => {
      this.router.navigate([rotas[posicaoRota - 1]]);
    });
  }

  private definirMenuAtivo() {
    const rotaAtual = this.router.url;
    const rotas = [
      Rotas.SISTEMA.alunos.FORMULARIO,
      Rotas.SISTEMA.alunos.LISTAGEM,
      Rotas.SISTEMA.usuario.FORMULARIO,
      Rotas.SISTEMA.usuario.LISTAGEM,
    ];

    this.menu = rotas.findIndex((rota) => rotaAtual.includes(rota)) + 1;
  }
}
