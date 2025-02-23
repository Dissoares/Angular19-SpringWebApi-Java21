import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
