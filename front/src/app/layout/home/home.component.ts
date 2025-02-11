import { FormularioComponent } from '../../components/formulario-modulo/formulario.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Component, OnInit } from '@angular/core';
import { ListagemComponent } from '../../components/listagem-modulo/listagem.component';
import { NavigationEnd, Router } from '@angular/router';
import { RotasEnum } from '../../core/enums/rotas.enum';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormularioComponent,
    ListagemComponent,
    MatToolbarModule,
    MatSidenavModule,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sidebarAberta: boolean = true;
  public ehDispositivoMobile: boolean = false;
  public rotaAtualEhListagem: Boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.verificarDispositivoAtualEhMobile();
  }

  public ativarSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }

  public verificarRotaAtual() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) 
      .subscribe((event: NavigationEnd) => {
        if(event.urlAfterRedirects === RotasEnum.LISTAGEM){
          this.rotaAtualEhListagem = true 
        } else{
          this.rotaAtualEhListagem = false;
        } 
        console.log("💡 EhListagem:", event.urlAfterRedirects)
        console.log("💡 this.rotaAtualEhListagem:", this.rotaAtualEhListagem)
      });
  }

  public verificarDispositivoAtualEhMobile() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.ehDispositivoMobile = result.matches;
      });
  }
}
