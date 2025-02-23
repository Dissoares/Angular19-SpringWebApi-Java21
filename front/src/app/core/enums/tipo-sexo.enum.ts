const listaTipoSexo: TipoSexoEnum[] = [];

export class TipoSexoEnum {
  static readonly MASCULINO = new TipoSexoEnum(1, 'MASCULINO');
  static readonly FEMININO = new TipoSexoEnum(2, 'FEMININO');

  private constructor(
    public readonly id: number,
    public readonly descricao: string
  ) {
    listaTipoSexo.push(this);
  }

  public static getAllValues(): TipoSexoEnum[] {
    return listaTipoSexo;
  }

  public static getById(id: number): TipoSexoEnum | undefined {
    return listaTipoSexo.find((tipoSexo) => tipoSexo.id === id);
  }

  public static getByDescricao(descricao: string): TipoSexoEnum | undefined {
    return listaTipoSexo.find((tipoSexo) => tipoSexo.descricao === descricao);
  }
}
