import { StatusSolicitacaoEnum } from '../enums/status-solicitacao.enum';
export class DadosPessoais {
  public id!: number;
  public nome!: string;
  public cpf!: string;
  public dataNascimento!: Date;
  public sexo!: string;
  public email!: string;
  public telefone!: string;
  public statusSolicitacao!: StatusSolicitacaoEnum;

  constructor(init?: Partial<DadosPessoais>) {
    Object.assign(this, init);
  }
}
