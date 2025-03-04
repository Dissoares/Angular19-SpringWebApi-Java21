export class PerfilPermissaoEnum {
  static readonly ALUNO = new PerfilPermissaoEnum(
    1,
    'ALUNO',
    'AREA_ALUNO',
    'Acessa cursos nos quais está matriculado, visualiza materiais didáticos e realiza atividades.'
  );
  static readonly PROFESSOR = new PerfilPermissaoEnum(
    2,
    'PROFESSOR',
    'GER_ALUNOS',
    'Gerencia alunos, cursos e notas, cria e edita materiais didáticos.'
  );
  static readonly INSTITUICAO = new PerfilPermissaoEnum(
    3,
    'INSTITUIÇÃO',
    'GER_ALUN_PROF_INST',
    'Gerencia alunos, professores e informações da própria instituição, incluindo cursos e matrículas.'
  );
  static readonly GESTOR = new PerfilPermissaoEnum(
    4,
    'GESTOR',
    'ACESSO_GERAL',
    'Gerencia todos os alunos, professores e instituições, usa todos os recursos do sistema.'
  );

  private constructor(
    public readonly codigo: number,
    public readonly perfil: string,
    public readonly permissao: string,
    public readonly descricao: string
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
    return this.getAllValues().find((perfil) => perfil.perfil === descricao);
  }
}
