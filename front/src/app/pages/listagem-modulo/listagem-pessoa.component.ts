import { FiltroPessoaComponent } from './filtro-pessoa/filtro-pessoa.component';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-pessoa',
  standalone: true,
  imports: [FiltroPessoaComponent, MatCardModule],
  templateUrl: './listagem-pessoa.component.html',
  styleUrls: ['./listagem-pessoa.component.scss'],
})
export class ListagemPessoaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
