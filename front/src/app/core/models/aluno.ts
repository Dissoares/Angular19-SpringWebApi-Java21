import { DadosPessoais, Notificacao, Usuario } from '.';
export class Aluno {
  public idAluno!: number;
  public dadosPessoais!: DadosPessoais;
  public usuario!: Usuario;
  public notificacoes?: Array<Notificacao>;
  public ativo!: boolean;

  constructor(init?: Partial<Aluno>) {
    Object.assign(this, init);
  }
}
