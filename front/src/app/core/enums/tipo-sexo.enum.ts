const listaTipoSexo: Array<TipoSexoEnum> = [];
export class TipoSexoEnum {
  static MASCULINO = new TipoSexoEnum(1, 'MASCULINO');
  static FEMININO = new TipoSexoEnum(2, 'FEMININO');

  constructor(public id: number, public descricao: string) {
    listaTipoSexo.push(this);
  }

  public static getAllValues(): Array<TipoSexoEnum> {
    return listaTipoSexo;
  }

  public static getById(id: number): TipoSexoEnum | undefined {
    return listaTipoSexo.find((tipoSexo) => tipoSexo.id === id);
  }

  public static getByDescricao(descricao: string): TipoSexoEnum | undefined {
    return listaTipoSexo.find((tipoSexo) => tipoSexo.descricao === descricao);
  }
}
