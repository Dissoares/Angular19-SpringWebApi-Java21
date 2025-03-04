export class PerfilPermissaoEnum {
  static readonly ALUNO = new PerfilPermissaoEnum(1, 'ALUNO', 'AREA_ALUNO');
  static readonly PROFESSOR = new PerfilPermissaoEnum(
    2,
    'PROFESSOR',
    'GER_ALUNOS'
  );
  static readonly INSTITUICAO = new PerfilPermissaoEnum(
    3,
    'INSTITUIÇÃO',
    'GER_ALUN_PROF_INST'
  );
  static readonly GESTOR = new PerfilPermissaoEnum(4, 'GESTOR', 'ACESSO_GERAL');

  private constructor(
    public readonly codigo: number,
    public readonly descricao: string,
    public readonly permissao: string
  ) {}

  public static getAllValues() {
    return Object.values(PerfilPermissaoEnum);
  }

  public static getByCodigo(codigo: number | string): PerfilPermissaoEnum {
    return PerfilPermissaoEnum.getAllValues().filter(
      (perfil) => perfil.codigo === Number(codigo)
    )[0];
  }

  public static getByDescricao(descricao: string): PerfilPermissaoEnum {
    return this.getAllValues().find((perfil) => perfil.descricao === descricao);
  }
}
