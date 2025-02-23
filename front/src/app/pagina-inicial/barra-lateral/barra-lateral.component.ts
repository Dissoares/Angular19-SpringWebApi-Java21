import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RotasEnum } from 'app/core/enums/rotas.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss'],
})
export class BarraLateralComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public navegarParaFormulario() {
    //this.router.navigate([RotasEnum.PESSOA_DADOS.formulario]);
  }

  public navegarParaListagem() {
    //this.router.navigate([RotasEnum.PESSOA_DADOS.listagem]);
  }
}
