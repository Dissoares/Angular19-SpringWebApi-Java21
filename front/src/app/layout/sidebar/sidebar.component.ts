import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RotasEnum } from '../../core/enums/rotas.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  public navegarParaFormulario(){
    this.router.navigate([RotasEnum.FORMULARIO]);
  }

  public navegarParaListagem(){
    this.router.navigate([RotasEnum.LISTAGEM]);
  }
}
