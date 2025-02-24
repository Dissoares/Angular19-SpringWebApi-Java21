import { StatusCadastroEnum } from '../enums/status-cadastro.enum';
import { Aluno } from './aluno';

export class Notificacao {
  public id!: number;
  public mensagem!: string;
  public status?: StatusCadastroEnum;
  public destinatario!: Aluno;
}
