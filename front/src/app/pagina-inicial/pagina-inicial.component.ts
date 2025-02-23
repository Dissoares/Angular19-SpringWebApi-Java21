import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RodapeComponent } from './rodape/rodape.component';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    BarraLateralComponent,
    CabecalhoComponent,
    MatToolbarModule,
    MatSidenavModule,
    RodapeComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
})
export class PaginaInicialComponent implements OnInit {
  public sidebarAberta: boolean = true;
  public ehDispositivoMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.verificarDispositivoAtualEhMobile();
  }

  public ativarSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }

  public verificarDispositivoAtualEhMobile() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.ehDispositivoMobile = result.matches;
      });
  }
}
