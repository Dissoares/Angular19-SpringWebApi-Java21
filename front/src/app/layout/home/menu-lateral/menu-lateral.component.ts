import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Rotas } from 'app/core/enums';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
  ],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent implements OnInit {
  private menuSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public menu$ = this.menuSubject.asObservable();

  constructor(private router: Router) {}

  ngOnInit() {}

  public ativarMenu(posicao: number) {
    this.menuSubject.next(posicao);
    this.navegarParaRota(posicao);
  }

  public navegarParaRota(posicaoRota: number) {
    const rotas = [
      Rotas.SISTEMA.alunos.FORMULARIO,
      Rotas.SISTEMA.alunos.LISTAGEM,
      Rotas.SISTEMA.usuario.FORMULARIO,
      Rotas.SISTEMA.usuario.LISTAGEM,
    ];

    this.router.navigate([rotas[posicaoRota]]);
  }
}
