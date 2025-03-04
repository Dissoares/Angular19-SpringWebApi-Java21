import { DadosPessoais, Usuario } from '.';
export class Aluno {
  public idAluno!: number;
  public dadosPessoais!: DadosPessoais;
  public usuario!: Usuario;

  constructor(init?: Partial<Aluno>) {
    Object.assign(this, init);
  }
}
