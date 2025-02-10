import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormularioContatoComponent } from '../../components/formulario-contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormularioContatoComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    MatToolbarModule,
    MatSidenavModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sidebarAberta: boolean = true;

  constructor() {}

  ngOnInit() {}

  public ativarSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }
}
