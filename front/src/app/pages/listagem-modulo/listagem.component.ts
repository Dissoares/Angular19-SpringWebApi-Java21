import { FiltroComponent } from './filtro/filtro.component';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [FiltroComponent, MatCardModule],
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
