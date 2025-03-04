import { Permissao } from './permissao';

export class Usuario {
  public idUsuario!: number;
  public usuario!: string;
  public email!: string;
  public senha!: string;
  public permissoes?: Array<Permissao>;
  public ativo!: boolean;
}
