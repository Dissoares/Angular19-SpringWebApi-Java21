import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alunos-modulo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './alunos-modulo.component.html',
  styleUrls: ['./alunos-modulo.component.scss'],
})
export class AlunosModuloComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
