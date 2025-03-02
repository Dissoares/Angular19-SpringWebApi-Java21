import { DadosContato, DadosEndereco, DadosPessoais } from '.';

export class Aluno {
  public dadosPessoais!: DadosPessoais;
  public id!: number;
  constructor(init?: Partial<Aluno>) {
    Object.assign(this, init);
  }
}
