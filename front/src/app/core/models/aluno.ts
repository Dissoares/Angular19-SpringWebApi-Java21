import { DadosContato, DadosEndereco, DadosPessoais } from '.';

export class Aluno {
  public dadosPessoais!: DadosPessoais;
  constructor(init?: Partial<Aluno>) {
    Object.assign(this, init);
  }
}
