const listaTipoTelefone: TipoTelefoneEnum[] = [];

export class TipoTelefoneEnum {
  static readonly CELULAR = new TipoTelefoneEnum(1, 'CELULAR');
  static readonly FIXO = new TipoTelefoneEnum(2, 'FIXO');

  private constructor(
    public readonly id: number,
    public readonly descricao: string
  ) {
    listaTipoTelefone.push(this);
  }

  public static getAllValues(): TipoTelefoneEnum[] {
    return listaTipoTelefone;
  }

  public static getById(id: number): TipoTelefoneEnum | undefined {
    return listaTipoTelefone.find((tipoTelefone) => tipoTelefone.id === id);
  }

  public static getByDescricao(
    descricao: string
  ): TipoTelefoneEnum | undefined {
    return listaTipoTelefone.find(
      (tipoTelefone) => tipoTelefone.descricao === descricao
    );
  }
}
