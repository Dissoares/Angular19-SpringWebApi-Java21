import { PessoaFiltroComponent } from './filtro/pessoa-filtro.component';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-pessoa',
  standalone: true,
  imports: [PessoaFiltroComponent, MatCardModule],
  templateUrl: './listagem-pessoa.component.html',
  styleUrls: ['./listagem-pessoa.component.scss'],
})
export class PessoaListagemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
