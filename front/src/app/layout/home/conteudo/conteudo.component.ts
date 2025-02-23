
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RodapeComponent } from '../rodape/rodape.component';
import { Component, OnInit } from '@angular/core';
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
