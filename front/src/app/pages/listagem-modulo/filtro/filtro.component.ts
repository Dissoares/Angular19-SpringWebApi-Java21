import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
