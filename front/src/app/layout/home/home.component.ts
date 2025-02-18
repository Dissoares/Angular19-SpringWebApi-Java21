import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
