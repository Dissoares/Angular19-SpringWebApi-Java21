import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RodapeComponent } from '../rodape/rodape.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [
    MenuLateralComponent,
    CabecalhoComponent,
    MatToolbarModule,
    MatSidenavModule,
    RodapeComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss'],
})
export class ConteudoComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public ehDispositivoMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.verificarDispositivoAtualEhMobile();
  }

  public ativarSidebar() {
    this.sidenav.toggle();
  }

  public verificarDispositivoAtualEhMobile() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.ehDispositivoMobile = result.matches;
      });
  }
}
