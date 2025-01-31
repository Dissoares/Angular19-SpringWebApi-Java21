const listaTipoSexo: Array<TipoSexoEnum> = [];

export class TipoSexoEnum {
  static MASCULINO = new TipoSexoEnum(1, 'MASCULINO');
  static FEMININO = new TipoSexoEnum(2, 'FEMININO');

  constructor(public id: number, public descricao: string) {
    listaTipoSexo.push(this);
  }

  public static values(): Array<TipoSexoEnum> {
    return listaTipoSexo;
  }

  public static getById(id: number): TipoSexoEnum | undefined {
    return listaTipoSexo.find((tipo) => tipo.id === id);
  }

  public static getByDescricao(descricao: string): TipoSexoEnum | undefined {
    return listaTipoSexo.find((tipo) => tipo.descricao === descricao);
  }
}
