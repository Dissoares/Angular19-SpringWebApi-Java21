import { PerfilPermissaoEnum } from '../enums/perfil-permissao.enum';
export class Usuario {
  public idUsuario?: number;
  public nomeUsuario!: string;
  public email!: string;
  public senha!: string;
  public perfilPermissao!: Array<PerfilPermissaoEnum>;
  public ativo?: boolean;
}
