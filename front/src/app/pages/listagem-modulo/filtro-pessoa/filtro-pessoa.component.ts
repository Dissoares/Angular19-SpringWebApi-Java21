import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-pessoa',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './filtro-pessoa.component.html',
  styleUrls: ['./filtro-pessoa.component.scss'],
})
export class FiltroPessoaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
