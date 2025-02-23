import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modulos-aluno',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './modulos-aluno.component.html',
  styleUrls: ['./modulos-aluno.component.scss'],
})
export class ModulosAlunoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
