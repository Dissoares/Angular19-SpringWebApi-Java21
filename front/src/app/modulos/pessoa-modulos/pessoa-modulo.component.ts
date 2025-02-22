import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../layout/home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pessoa-modulo',
  standalone: true,
  imports: [HomeComponent, RouterModule, CommonModule],
  templateUrl: './pessoa-modulo.component.html',
  styleUrls: ['./pessoa-modulo.component.scss'],
})
export class PessoaModuloComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
