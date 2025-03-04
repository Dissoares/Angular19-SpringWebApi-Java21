import { PerfilPermissao } from './perfil-permissao';
export class Usuario {
  public idUsuario?: number;
  public nomeUsuario!: string;
  public email!: string;
  public senha!: string;
  public perfilPermissao?: Array<PerfilPermissao>;
  public ativo?: boolean;
}
