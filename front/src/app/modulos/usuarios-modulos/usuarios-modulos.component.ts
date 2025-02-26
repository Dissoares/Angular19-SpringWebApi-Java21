import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios-modulos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuarios-modulos.component.html',
  styleUrls: ['./usuarios-modulos.component.scss'],
})
export class UsuariosModulosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
