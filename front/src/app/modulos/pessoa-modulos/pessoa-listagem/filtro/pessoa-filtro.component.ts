import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-filtro',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './filtro-pessoa.component.html',
  styleUrls: ['./filtro-pessoa.component.scss'],
})
export class PessoaFiltroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
