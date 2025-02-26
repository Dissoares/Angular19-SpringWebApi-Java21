import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alunos-modulos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './alunos-modulos.component.html',
  styleUrls: ['./alunos-modulos.component.scss'],
})
export class AlunosModulosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
