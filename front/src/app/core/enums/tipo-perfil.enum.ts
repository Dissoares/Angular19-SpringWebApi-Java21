const listaPerfil: PerfilEnum[] = [];

export class PerfilEnum {
  static readonly ADMINISTRADOR = new PerfilEnum(1, 'ADMINISTRADOR', 'ACESSO_GERAL');
  static readonly ALUNO = new PerfilEnum(2, 'ALUNO', 'AREA_ALUNO');
  static readonly PROFESSOR = new PerfilEnum(3, 'PROFESSOR','GERENCIAR_ALUNOS');
  static readonly INSTITUICAO = new PerfilEnum(4, 'INSTITUIÇÃO', 'GERENCIA_ALUNO_PROFESSOR');

  private constructor(
    public readonly id: number,
    public readonly descricao: string,
    public readonly permissoes: string
  ) {
    listaPerfil.push(this);
  }

  public static getAllValues(): PerfilEnum[] {
    return listaPerfil;
  }

  public static getById(id: number): PerfilEnum | undefined {
    return listaPerfil.find((perfil) => perfil.id === id);
  }

  public static getByDescricao(descricao: string): PerfilEnum | undefined {
    return listaPerfil.find((perfil) => perfil.descricao === descricao);
  }
}

