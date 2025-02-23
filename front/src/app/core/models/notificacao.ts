import { StatusCadastroEnum } from '../enums/status-cadastro.enum';

export class Notificacao {
  public id!: number;
  public mensagem!: string;
  public status?: StatusCadastroEnum;
}
