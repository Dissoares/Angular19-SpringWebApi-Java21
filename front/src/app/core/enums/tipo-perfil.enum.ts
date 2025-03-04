export class PerfilEnum {
  static readonly ALUNO = new PerfilEnum(1, 'ALUNO', 'AREA_ALUNO');
  static readonly PROFESSOR = new PerfilEnum(2, 'PROFESSOR', 'GER_ALUNOS');
  static readonly INSTITUICAO = new PerfilEnum(
    3,
    'INSTITUIÇÃO',
    'GER_ALUN_PROF_INST'
  );
  static readonly GESTOR = new PerfilEnum(4, 'GESTOR', 'ACESSO_GERAL');

  private constructor(
    public readonly codigo: number,
    public readonly descricao: string,
    public readonly permissao: string
  ) {}

  public static getAllValues() {
    return Object.values(PerfilEnum);
  }

  public static getByCodigo(codigo: number | string): PerfilEnum {
    return PerfilEnum.getAllValues().filter(
      (perfil) => perfil.codigo === Number(codigo)
    )[0];
  }

  public static getByDescricao(descricao: string): PerfilEnum {
    return this.getAllValues().find((perfil) => perfil.descricao === descricao);
  }
}
