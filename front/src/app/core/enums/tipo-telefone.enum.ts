const listaTipoTelefone: Array<TipoTelefoneEnum> = [];

export class TipoTelefoneEnum {
  static CELULAR = new TipoTelefoneEnum(1, 'CELULAR');
  static FIXO = new TipoTelefoneEnum(2, 'FIXO');

  constructor(public id: number, public descricao: string) {
    listaTipoTelefone.push(this);
  }

  public static getAllValues(): Array<TipoTelefoneEnum> {
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
