import { AlunoDadosPessoaisComponent } from './aluno-dados-pessoais/aluno-dados-pessoais.component';
import { AlunoDadosEnderecoComponent } from './aluno-dados-endereco/aluno-dados-endereco.component';
import { AlunoDadosContatoComponent } from './aluno-dados-contato/aluno-dados-contato.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-formulario',
  standalone: true,
  imports: [
    AlunoDadosPessoaisComponent,
    AlunoDadosEnderecoComponent,
    AlunoDadosContatoComponent,
  ],
  templateUrl: './alunos-formulario.component.html',
  styleUrls: ['./alunos-formulario.component.scss'],
})
export class AlunosFormularioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
