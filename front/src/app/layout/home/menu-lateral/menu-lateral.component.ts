import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RotasEnum } from 'app/core/enums/rotas.enum';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
})
export class MenuLateralComponent implements OnInit {
  public botao: string = 'formulario';
  constructor(private router: Router) {}

  ngOnInit() {}

  public ativarBotaoENavegar(rotaBotao: string) {
    this.router.navigate([`sistema/alunos/${rotaBotao}`]);
    this.botao = rotaBotao;
  }
}
