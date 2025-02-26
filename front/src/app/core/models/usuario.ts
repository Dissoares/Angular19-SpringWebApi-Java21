import { Permissao } from './permissao';

export class Usuario {
  public id!: number;
  public usuario!: string;
  public email!: string;
  public senha!: string;
  public permissoes?: Array<Permissao>;
  public ativo!: boolean;
}
